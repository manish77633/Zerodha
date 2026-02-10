const express = require('express');
const mongoose = require('mongoose');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { UserModel } = require("./model/UserModel");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cors());

// Database Connection
mongoose.connect(url)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({}).sort({ _id: -1 });
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// ==================== MAIN ORDER ROUTE ====================
// ==================== MAIN ORDER ROUTE (FIXED) ====================
app.post("/newOrder", async (req, res) => {
  try {
    // 1. Data Cleaning (Inputs ko saaf aur consistent banao)
    const name = req.body.name ? req.body.name.trim().toUpperCase() : ""; // Stock name always UPPERCASE
    const mode = req.body.mode ? req.body.mode.trim().toUpperCase() : ""; // BUY/SELL
    const product = req.body.product ? req.body.product.trim().toUpperCase() : "CNC"; // Product consistency
    const addedTime = req.body.addedTime;
    
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    // 2. Basic Validation
    if (!name || !mode || qty <= 0 || price <= 0) {
      return res.status(400).json({ error: "Invalid data. Check Name, Qty, or Price." });
    }

    console.log(`\n🔄 Processing ${mode} Order for ${name} (${product}) | Qty: ${qty}`);

    // Order History save karo
    await new OrdersModel({ name, qty, price, mode, product, addedTime }).save();

    // ==================== HOLDINGS LOGIC ====================
    if (mode === "BUY") {
      // --- BUY ---
      let existingHolding = await HoldingsModel.findOne({ name });
      
      if (existingHolding) {
        let oldQty = Number(existingHolding.qty);
        let oldAvg = Number(existingHolding.avg);
        let newTotalQty = oldQty + qty;
        let newAvgPrice = ((oldQty * oldAvg) + (qty * price)) / newTotalQty;

        await HoldingsModel.updateOne(
          { name }, 
          { qty: newTotalQty, avg: newAvgPrice.toFixed(2), price: price }
        );
      } else {
        await new HoldingsModel({ 
          name, qty, avg: price.toFixed(2), price, net: "+0.00%", day: "+0.00%" 
        }).save();
      }
    } 
    else if (mode === "SELL") {
      // --- SELL ---
      let existingHolding = await HoldingsModel.findOne({ name });

      // Check: Share hai bhi ya nahi?
      if (!existingHolding || Number(existingHolding.qty) < qty) {
        return res.status(400).json({ error: "Insufficient holdings to sell!" });
      }

      let currentQty = Number(existingHolding.qty);
      let newQty = currentQty - qty;

      if (newQty <= 0) {
        // Agar 0 ya usse kam bacha, toh delete kar do
        await HoldingsModel.deleteOne({ name });
        console.log(`✅ Holdings for ${name} removed (Qty is 0)`);
      } else {
        await HoldingsModel.updateOne({ name }, { qty: newQty });
        console.log(`✅ Holdings updated: ${newQty} remaining`);
      }
    }

    // ==================== POSITIONS LOGIC (Main Fix Here) ====================
    // Dhyan de: Hamein Name aur Product (CNC/MIS) dono match karne hain
    let existingPos = await PositionsModel.findOne({ name, product });
    
    // BUY hai toh +qty, SELL hai toh -qty
    let qtyChange = (mode === "BUY") ? qty : -qty;

    if (existingPos) {
      // Agar position pehle se hai (Buy kiya tha, ab Sell kar rahe hain)
      let currentPosQty = Number(existingPos.qty);
      let newPosQty = currentPosQty + qtyChange;
      
      console.log(`Positions Update: ${currentPosQty} + (${qtyChange}) = ${newPosQty}`);

      if (newPosQty === 0) {
        // --- FIX: Agar quantity 0 ho gayi, toh delete karo ---
        await PositionsModel.deleteOne({ name, product });
        console.log(`✅ Position closed and removed for ${name}`);
      } else {
        // Agar 0 nahi hui (matlab partial sell kiya, ya short sell kiya)
        // Average tabhi update karte hain jab position badh rahi ho (optionally)
        // Simple rakhne ke liye hum sirf qty aur price update kar rahe hain
        await PositionsModel.updateOne(
          { name, product }, 
          { qty: newPosQty, price: price }
        );
      }
    } else {
      // Agar Position exist nahi karti
      // Case 1: Pehli baar BUY kar rahe hain -> Create New
      // Case 2: Direct SELL kar rahe hain (Short Selling) -> Create New (-Qty)
      
      await new PositionsModel({
        product, 
        name, 
        qty: qtyChange, // BUY hoga toh positive, SELL hoga toh negative
        avg: price.toFixed(2), 
        price, 
        net: "+0.00%", 
        day: "+0.00%", 
        isLoss: false
      }).save();
      console.log(`✅ New Position created for ${name}: ${qtyChange}`);
    }

    res.status(200).json({ message: "Order processed successfully!" });

  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }
    
    const newUser = new UserModel({ username, email, password });
    await newUser.save();
    
    res.status(201).json({ 
      message: "User created successfully!",
      user: { username, email }
    });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
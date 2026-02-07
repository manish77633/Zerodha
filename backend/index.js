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
app.post("/newOrder", async (req, res) => {
  try {
    const { name, product, addedTime } = req.body;
    
    const mode = req.body.mode ? req.body.mode.trim().toUpperCase() : "";
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    // Validation
    if (!name || !mode || !product) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!["BUY", "SELL"].includes(mode)) {
      return res.status(400).json({ error: "Invalid mode. Must be BUY or SELL" });
    }

    if (qty <= 0 || price <= 0) {
      return res.status(400).json({ error: "Quantity and price must be greater than 0" });
    }

    console.log(`\n🔄 Processing ${mode} Order`);
    console.log(`Stock: ${name} | Qty: ${qty} | Price: ₹${price} | Product: ${product}`);

    // Save order record
    await new OrdersModel({ name, qty, price, mode, product, addedTime }).save();

    // ==================== BUY LOGIC ====================
    if (mode === "BUY") {
      console.log("📈 BUY Order - Increasing Holdings");
      
      let existingHolding = await HoldingsModel.findOne({ name });
      
      if (existingHolding) {
        let oldQty = Number(existingHolding.qty);
        let oldAvg = Number(existingHolding.avg);
        let newTotalQty = oldQty + qty; // ✅ PLUS for BUY
        
        // Weighted Average
        let newAvgPrice = ((oldQty * oldAvg) + (qty * price)) / newTotalQty;

        await HoldingsModel.updateOne(
          { name }, 
          { 
            qty: newTotalQty, 
            avg: newAvgPrice.toFixed(2), 
            price: price.toFixed(2) 
          }
        );
        
        console.log(`✅ Holdings Updated: ${oldQty} → ${newTotalQty} (INCREASED by ${qty})`);
      } else {
        await new HoldingsModel({ 
          name, 
          qty, 
          avg: price.toFixed(2), 
          price: price.toFixed(2), 
          net: "+0.00%", 
          day: "+0.00%" 
        }).save();
        
        console.log(`✅ New Holding Created: ${qty} shares`);
      }
    } 
    
    // ==================== SELL LOGIC ====================
    else if (mode === "SELL") {
      console.log("📉 SELL Order - Decreasing Holdings");
      
      let existingHolding = await HoldingsModel.findOne({ name });

      // Check if holdings exist
      if (!existingHolding) {
        console.log(`❌ No holdings found for ${name}`);
        return res.status(400).json({ 
          error: `You don't own any shares of ${name}!` 
        });
      }

      let currentQty = Number(existingHolding.qty);
      
      console.log(`Current Holdings: ${currentQty} shares`);
      console.log(`Trying to sell: ${qty} shares`);
      
      // Check if sufficient shares
      if (currentQty < qty) {
        console.log(`❌ Insufficient shares!`);
        return res.status(400).json({ 
          error: `Insufficient shares! You have ${currentQty} but trying to sell ${qty}` 
        });
      }

      let newQty = currentQty - qty; // ✅ MINUS for SELL (यही सही है!)

      console.log(`New Quantity: ${currentQty} - ${qty} = ${newQty}`);

      if (newQty === 0) {
        await HoldingsModel.deleteOne({ name });
        console.log(`✅ All shares sold - Holding deleted`);
      } else {
        await HoldingsModel.updateOne(
          { name }, 
          { 
            qty: newQty,  // ✅ Reduced quantity
            price: price.toFixed(2)
          }
        );
        console.log(`✅ Holdings Updated: ${currentQty} → ${newQty} (DECREASED by ${qty})`);
      }
    }

    // ==================== POSITIONS UPDATE ====================
    console.log(`\n📊 Updating Positions Table`);
    
    let existingPos = await PositionsModel.findOne({ name, product });
    
    // For positions: BUY adds positive, SELL adds negative
    let qtyChange = (mode === "BUY") ? qty : -qty;
    
    console.log(`Position Quantity Change: ${qtyChange}`);

    if (existingPos) {
      let currentPosQty = Number(existingPos.qty);
      let newPosQty = currentPosQty + qtyChange; // This works because qtyChange is already +/-
      
      console.log(`Current Position: ${currentPosQty}`);
      console.log(`New Position: ${currentPosQty} + (${qtyChange}) = ${newPosQty}`);
      
      if (newPosQty === 0) {
        await PositionsModel.deleteOne({ name, product });
        console.log(`✅ Position Closed`);
      } else {
        let updateData = { 
          qty: newPosQty, 
          price: price.toFixed(2) 
        };
        
        // Update weighted average only for BUY
        if (mode === "BUY" && currentPosQty > 0) {
          let oldPosAvg = Number(existingPos.avg);
          let newPosAvg = ((currentPosQty * oldPosAvg) + (qty * price)) / newPosQty;
          updateData.avg = newPosAvg.toFixed(2);
        }
        
        await PositionsModel.updateOne({ name, product }, updateData);
        console.log(`✅ Position Updated: ${currentPosQty} → ${newPosQty}`);
      }
    } else {
      await new PositionsModel({
        product, 
        name, 
        qty: qtyChange,  // Will be negative if SELL
        avg: price.toFixed(2), 
        price: price.toFixed(2), 
        net: "+0.00%", 
        day: "+0.00%", 
        isLoss: false
      }).save();
      
      console.log(`✅ New Position Created: ${qtyChange}`);
    }

    console.log(`\n✅ Order Processed Successfully!\n`);

    res.status(200).json({ 
      message: `${mode} order processed successfully!`,
      order: { name, qty, price, mode, product }
    });

  } catch (err) {
    console.error("❌ Backend Error:", err.message);
    res.status(500).json({ 
      error: "Internal Server Error", 
      details: err.message 
    });
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
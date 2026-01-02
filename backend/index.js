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
app.use(cors({
  origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL, "http://localhost:5173"],
  credentials: true
}));

// Database Connection - Server start hone se pehle connect karna behtar hai
mongoose.connect(url)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("DB Connection Error:", err));

  // ---------------------holdings data--------------------
  
// app.get('/addHoldings', async (req, res) => {
//   let tempHoldings = [
//     { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+2.58%", day: "+200.99%" },
//     { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "-10.04%", day: "+0.11%" },
//     { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//     { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
//     { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
//     { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//     { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%" },
//     { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//     { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%" },
//     { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
//     { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%" },
//     { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%" },
//     { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//   ];

//   try {
//     // Bulk Insert: Sabhi holdings ko ek sath save karega
//     await HoldingsModel.insertMany(tempHoldings);
//     res.send('Holdings added successfully');
//   } catch (error) {
//     console.error("Error saving holdings:", error);
//     res.status(500).send("Error adding data to database");
//   }
// });

// --------------------position data--------------------
// app.get('/addPositions', async (req, res) => {
//   let tempPositoins = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   try {
//     await PositionsModel.insertMany(tempPositoins);
//     res.send('Positions added successfully');
//   } catch (error) {
//     console.error("Error saving positions:", error);
//     res.status(500).send("Error adding data to database");
//   }
// });


app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async (req, res) => { // async add kiya
    try {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode, // frontend se mode bhi aa raha hai toh add kar dein
        });

        await newOrder.save(); // await lagana bahut zaroori hai
        console.log("Order Saved successfully!");
        res.status(201).send("Order received and saved");
    } catch (err) {
        console.error("Order Save Error:", err);
        res.status(500).send("Error saving order");
    }
});

app.get("/allOrders", async (req, res) => {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
});


app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new UserModel({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Signup failed. Email might already exist." });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
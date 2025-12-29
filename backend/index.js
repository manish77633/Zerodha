const express = require('express');
const mongoose = require('mongoose');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

// Database Connection - Server start hone se pehle connect karna behtar hai
mongoose.connect(url)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("DB Connection Error:", err));

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



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
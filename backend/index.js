const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const url=process.env.MONGO_URL;
app.get('/', (req, res) => {
  res.send('Hello World!');
}	);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
 mongoose.connect(url)
 console.log("connected to mongodb");
});
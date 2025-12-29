const { model } = require('mongoose');
const HoldingsSchema = require('../schemas/HoldingsSchema');

const HoldingsModel = model('Holdings', HoldingsSchema);

// Ise object ke roop mein export karein taaki { HoldingsModel } kaam kare
module.exports = { HoldingsModel };
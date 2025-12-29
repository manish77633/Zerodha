const {model} = require('mongoose');
const HoldingsSchema=require('../schemas/HoldingsSchema');

const HoldingsModel=model('Holdings',HoldingsSchema);
module.exports=HoldingsModel;
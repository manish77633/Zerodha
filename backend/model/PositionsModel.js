const { model } = require('mongoose');
const PositionsSchema = require('../schemas/PositionsSchema'); // Ab ye sahi schema uthayega

const PositionsModel = model('Positions', PositionsSchema);
module.exports = { PositionsModel };
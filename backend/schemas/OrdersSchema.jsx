
const { Schema } = require('mongoose');

const OrdersSchema = new Schema({
	name: String,
	qty: Number,
	avg: Number,
	price: Number,
	net: String,
	day: String
});

module.exports = OrdersSchema;

const { Schema } = require('mongoose');

const OrdersSchema = new Schema({
	name: "BHARTIARTL",
	qty: 2,
	avg: 538.05,
	price: 541.15,
	net: "+2.58%",
	day: "+200.99%"
});

module.exports = OrdersSchema;
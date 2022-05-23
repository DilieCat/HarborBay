const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShipReadSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	maxCapicityContainers: {
		type: Number,
		required: true
	},
});

const ShipRead = mongoose.model('shipRead', ShipReadSchema);

module.exports = ShipRead;
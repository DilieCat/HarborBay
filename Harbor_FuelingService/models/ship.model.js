const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchipSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	maxCapicityContainers: {
		type: Number,
		required: true
	},
	fuelPercentage: {
		type: Number,
		required: true
	},
	batteryPercentage: {
		type: Number,
		required: true
	},
});

const Ship = mongoose.model('ship', SchipSchema);

module.exports = Ship;
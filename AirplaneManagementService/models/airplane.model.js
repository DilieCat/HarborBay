const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirplaneSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	maxCapicity: {
		type: Number,
		required: true
	},
});

const Airplane = mongoose.model('airplane', AirplaneSchema);

module.exports = Airplane;
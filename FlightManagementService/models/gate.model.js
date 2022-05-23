const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gateSchema = new Schema({
	Terminal: {
		type: String,
		required: true
	},
	GateNumber: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

// const gate = mongoose.model('gate', gateSchema);

module.exports = mongoose.model('gate', gateSchema);
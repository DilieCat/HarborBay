const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GateReadSchema = new Schema({
	Terminal: {
		type: String,
		required: true
	},
	Number: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('GateRead', GateReadSchema);
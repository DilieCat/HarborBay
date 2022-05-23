const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkinSchema = new Schema({
	CheckInNumber: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

// const gate = mongoose.model('gate', gateSchema);

module.exports = mongoose.model('checkin', checkinSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkinReadSchema = new Schema({
	CheckInNumber: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});



module.exports = mongoose.model('checkinRead', checkinReadSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentalAgreementReadSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dock: {
		type: Number,
		required: true
	},
	dateArrival: {
		type: Date,
		required: true
	},
	dateDeparture: {
		type: Date,
		required: false
	}
});

const RentalAgreementRead = mongoose.model('rentalAgreementRead', RentalAgreementReadSchema);

module.exports = RentalAgreementRead;
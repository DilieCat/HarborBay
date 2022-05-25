const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentalAgreementSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dock: {
		type: Number,
		required: true
	},
	dateArrival: {
		type: Date,
		required: true
	},
	// Required: false is bewust, een dock kan voor "indefinite" time worden verhuurd.
	dateDeparture: {
		type: Date,
		required: false
	}
});

const RentalAgreement = mongoose.model('rentalAgreement', RentalAgreementSchema);

module.exports = RentalAgreement;
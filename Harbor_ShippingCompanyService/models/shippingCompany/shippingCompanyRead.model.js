const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingCompanyReadSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	// ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	ships: {
		type: [Schema.Types.ObjectId],
		// ref: 'ship',
		required: true
	}
});

const ShippingCompanyRead = mongoose.model('shippingCompanyRead', ShippingCompanyReadSchema);

module.exports = ShippingCompanyRead;
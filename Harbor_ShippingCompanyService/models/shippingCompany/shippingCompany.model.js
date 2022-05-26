const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingCompanySchema = new Schema({
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

const ShippingCompany = mongoose.model('shippingCompany', ShippingCompanySchema);

module.exports = ShippingCompany;
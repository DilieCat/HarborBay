const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InboundSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dateArrival: {
		type: Date,
		required: true
	}
});

const Inbound = mongoose.model('inbound', InboundSchema);

module.exports = Inbound;
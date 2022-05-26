const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutboundSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dateDeparture: {
		type: Date,
		required: true
	}
});

const Outbound = mongoose.model('outbound', OutboundSchema);

module.exports = Outbound;
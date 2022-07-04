const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutboundReadSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dateDeparture: {
		type: Date,
		required: true
	}
});

const OutboundRead = mongoose.model('outboundRead', OutboundReadSchema);

module.exports = OutboundRead;
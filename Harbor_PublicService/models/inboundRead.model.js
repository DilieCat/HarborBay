const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InboundReadSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dateArrival: {
		type: Date,
		required: true
	}
});

const InboundRead = mongoose.model('inboundRead', InboundReadSchema);

module.exports = InboundRead;
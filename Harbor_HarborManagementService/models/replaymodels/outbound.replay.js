const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OutboundReplaySchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dateDeparture: {
		type: Date,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('OutboundReplay', OutboundReplaySchema);
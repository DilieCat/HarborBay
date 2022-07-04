const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InboundReplaySchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	dateArrival: {
		type: Date,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('InboundReplay', InboundReplaySchema);
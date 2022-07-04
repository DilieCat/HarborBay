const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const containerShipReadSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	containersOnBoard: {
		type: [Schema.Types.ObjectId]
	}
});

const SontainerS = mongoose.model('containerShipRead', ContainerShipReadSchema);

module.exports = ContainerShipRead;
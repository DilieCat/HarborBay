const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const containerSchipSchema = new Schema({
	ship: {type: Schema.Types.ObjectId, ref: 'ship'},
	containersOnBoard: {
		type: [Schema.Types.ObjectId]
	}
});

const containerShip = mongoose.model('ship', ContainerSchipSchema);

module.exports = ContainerShip;
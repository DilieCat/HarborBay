const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContainerType = {
	Livestock: "Livestock",
	FreshProduce: "Fresh Produce",
	Other: "Other"
}

const ContainerSchema = new Schema({
	color: {
		type: String,
		required: true
	},
	containerType: {
		type: ContainerType,
		required: true
	}
});

const Container = mongoose.model('container', ContainerSchema);

module.exports = Container;
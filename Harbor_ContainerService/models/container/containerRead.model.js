const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContainerType = {
	Livestock: "Livestock",
	FreshProduce: "Fresh Produce",
	Other: "Other"
}

const ContainerReadSchema = new Schema({
	color: {
		type: String,
		required: true
	},
	containerType: {
		type: ContainerType,
		required: true
	}
});

const ContainerRead = mongoose.model('containerRead', ContainerReadSchema);

module.exports = ContainerRead;
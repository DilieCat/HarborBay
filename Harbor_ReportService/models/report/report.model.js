const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
	time: {
		type: Date,
		required: true
	},
	iron: {
		type: Number,
		required: true
	},
	phyto: {
		type: Number,
		required: true
	},
	oxygen: {
		type: Number,
		required: true
	},
	phytoplankton: {
		type: Number,
		required: true
	},
	salinity: {
		type: Number,
		required: true
	}
});

const Report = mongoose.model('report', ReportSchema);

module.exports = Report;
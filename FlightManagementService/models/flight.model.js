const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gateSchema = require('./gate.model').schema;

const flightSchema = new Schema({
	FlightNr: {
		type: Number,
		required: true
	},
	Departing: {
		type: Boolean,
		required: true
	},
    Destination: {
		type: String,
		required: true
	},
    Gate_open_time: {
		type: String,
		required: true
	},
    Departure_time: {
		type: String,
		required: true
	},
    Gate_close_time: {
        type: String,
        required: true,
    },
    Status: {
		type: String,
		required: true
	},
	//Gate: {type: Schema.Types.ObjectId, ref: 'gate'}
	Airplane: {type: Schema.Types.ObjectId, ref: 'airplane'}
}, {
	timestamps: true 
});

const flight = mongoose.model('flight', flightSchema)
module.exports = flight;
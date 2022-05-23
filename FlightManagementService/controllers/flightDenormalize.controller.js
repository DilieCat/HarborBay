const FlightRead = require('../models/flightRead.model');

const FlightCreate = (flight) => {
  const flightNew = new FlightRead(flight);

  flightNew.save((err) => {
    if (err) console.error(err);
  });
};

const FlightUpdate = (flight) => {
    FlightRead.findByIdAndUpdate(flight._id, { $set: flight }, (err) => {
    if (err) console.error(err);
  });
};

const FlightDelete = (flight) => {
    FlightRead.findByIdAndRemove(flight._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
    FlightCreate,
    FlightUpdate,
    FlightDelete,
};
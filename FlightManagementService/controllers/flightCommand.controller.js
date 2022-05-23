const Flight = require('../models/flight.model');
const MQService = require('../utils/MQService.utils');
const axios = require('axios');

const FlightCreate = (req, res, next) => {
  const FlightNew = new Flight({
    FlightNr: req.body.FlightNr,
    Departing: req.body.Departing,
    Destination: req.body.Destination,
    Gate_open_time: req.body.Gate_open_time,
    Departure_time: req.body.Departure_time,
    Gate_close_time: req.body.Gate_close_time,
    Status: req.body.Status,
    Airplane: req.body.Airplane
  //  Gate: req.body.Gate
  });

  FlightNew.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'flight',
      JSON.stringify({ eventType: 'createFlight', object: FlightNew })
    );
    return res.status(200).json(FlightNew).end();

  });
};

const FlightUpdate = async (req, res, next) => {
    Flight.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'flight',
      JSON.stringify({
        eventType: 'updateFlight',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const FlightDelete = (req, res, next) => {
    Flight.findByIdAndRemove(req.params.id, async (err, flight) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'flight',
      JSON.stringify({ eventType: 'deleteFlight', object: flight })
    );
    return res.status(200).json('Flight removed.').end();
  });
};



module.exports = {
  FlightCreate,
  FlightUpdate,
  FlightDelete,
};
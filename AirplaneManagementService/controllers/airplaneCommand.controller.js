const Airplane = require('../models/airplane.model');
const MQService = require('../utils/MQService.utils');

const AirplaneCreate = (req, res, next) => {
  const newAirplane = new Airplane({
    name: req.body.name,
    maxCapicity: req.body.maxCapicity
  });

  newAirplane.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airplane',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );

    await MQService.sendMessage(
      'flight',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );
    return res.status(200).json(newAirplane).end();
  });
};

const AirplaneUpdate = async (req, res, next) => {
  Airplane.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'airplane',
      JSON.stringify({
        eventType: 'updateAirplane',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const AirplaneDelete = (req, res, next) => {
  Airplane.findByIdAndRemove(req.params.id, async (err, fueltank) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'airplane',
      JSON.stringify({ eventType: 'deleteAirplane', object: fueltank })
    );
    return res.status(200).json('Airplane removed.').end();
  });
};

module.exports = {
    AirplaneCreate,
    AirplaneUpdate,
    AirplaneDelete
};

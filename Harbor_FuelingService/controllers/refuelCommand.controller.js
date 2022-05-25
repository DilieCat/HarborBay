const Ship = require('../models/ship.model');
const MQService = require('../utils/MQService.utils');

const RefuelShip = async (req, res, next) => {
    await MQService.sendMessage(
      'ship',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'fuel',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'public',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'refuel',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );

    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();

};


module.exports = {
    RefuelShip
};

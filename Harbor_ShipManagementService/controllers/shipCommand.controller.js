const Ship = require('../models/ship.model');
const MQService = require('../utils/MQService.utils');

const ShipCreate = (req, res, next) => {
  const newShip = new Ship({
    name: req.body.name,
    maxCapicityContainers: req.body.maxCapicityContainers,
    fuelPercentage: req.body.fuelPercentage,
    batteryPercentage: req.body.batteryPercentage
  });

  newShip.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'ship',
      JSON.stringify({ eventType: 'createShip', object: newShip })
    );

    await MQService.sendMessage(
      'harbor',
      JSON.stringify({ eventType: 'createShip', object: newShip })
    );

    await MQService.sendMessage(
      'public',
      JSON.stringify({ eventType: 'createShip', object: newShip })
    );
    
    await MQService.sendMessage(
      'dock',
      JSON.stringify({ eventType: 'createShip', object: newShip })
    );

    await MQService.sendMessage(
      'company',
      JSON.stringify({ eventType: 'createShip', object: newShip })
    );
    
      /*
    await MQService.sendMessage(
      'flight',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );

    await MQService.sendMessage(
      'airside',
      JSON.stringify({ eventType: 'createAirplane', object: newAirplane })
    );*/

    return res.status(200).json(newShip).end();
  });
};

const ShipUpdate = async (req, res, next) => {
  Ship.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'ship',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'dock',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'company',
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
      'harbor',
      JSON.stringify({
        eventType: 'updateShip',
        object: { _id: req.params.id, ...req.body },
      })
    );
    
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const ShipDelete = (req, res, next) => {
  Ship.findByIdAndRemove(req.params.id, async (err, fueltank) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'ship',
      JSON.stringify({ eventType: 'deleteShip', object: fueltank })
    );

    await MQService.sendMessage(
      'dock',
      JSON.stringify({ eventType: 'deleteShip', object: fueltank })
    );

    await MQService.sendMessage(
      'company',
      JSON.stringify({ eventType: 'deleteShip', object: fueltank })
    );

    await MQService.sendMessage(
      'public',
      JSON.stringify({ eventType: 'deleteShip', object: fueltank })
    );

    await MQService.sendMessage(
      'harbor',
      JSON.stringify({ eventType: 'deleteShip', object: fueltank })
    );

    return res.status(200).json('Ship removed.').end();
  });
};

module.exports = {
    ShipCreate,
    ShipUpdate,
    ShipDelete
};

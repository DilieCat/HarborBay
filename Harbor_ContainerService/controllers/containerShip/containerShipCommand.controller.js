const Ship = require('../../models/ship/containerShip.model');
const MQService = require('../../utils/MQService.utils');

const ContainerShipUpdate = async (req, res, next) => {
  Ship.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'container',
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

module.exports = {
  ContainerContainerShipReadShipUpdate
};

const Container = require('../../models/container/container.model');
const MQService = require('../../utils/MQService.utils');

const ContainerCreate = (req, res, next) => {
  const newContainer = new Container({
    color: req.body.color,
    containerType: req.body.containerType
  });

  newContainer.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'container',
      JSON.stringify({ eventType: 'containerCreated', object: newContainer })
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

    return res.status(200).json(newContainer).end();
  });
};

const ContainerUpdate = async (req, res, next) => {
  Container.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'container',
      JSON.stringify({
        eventType: 'containerUpdated',
        object: { _id: req.params.id, ...req.body },
      })
    );

    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const ContainerDelete = (req, res, next) => {
  Container.findByIdAndRemove(req.params.id, async (err, container) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'container',
      JSON.stringify({ eventType: 'containerRemoved', object: container })
    );
    
    return res.status(200).json('Container removed.').end();
  });
};

module.exports = {
    ContainerCreate,
    ContainerUpdate,
    ContainerDelete
};

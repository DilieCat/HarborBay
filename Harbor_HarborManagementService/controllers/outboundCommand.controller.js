const Outbound = require('../models/outbound.model');
const MQService = require('../utils/MQService.utils');

const OutboundCreate = (req, res, next) => {
  const newOutbound = new Outbound({
    ship: req.body.ship,
    dateDeparture: req.body.dateDeparture
  });

  if(req.body.dateDeparture == null){
    newOutbound.dateDeparture = new Date();
  }

  newOutbound.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'harbor',
      JSON.stringify({ eventType: 'createOutbound', object: newOutbound })
    );

    await MQService.sendMessage(
      'public',
      JSON.stringify({ eventType: 'createOutbound', object: newOutbound })
    );

    return res.status(200).json(newOutbound).end();
  });
};

const OutboundUpdate = async (req, res, next) => {
  Outbound.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'harbor',
      JSON.stringify({
        eventType: 'updateOutbound',
        object: { _id: req.params.id, ...req.body },
      })
    );

    await MQService.sendMessage(
      'public',
      JSON.stringify({
        eventType: 'updateOutbound',
        object: { _id: req.params.id, ...req.body },
      })
    );

    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const OutboundDelete = (req, res, next) => {
  Outbound.findByIdAndRemove(req.params.id, async (err, Outbound) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'harbor',
      JSON.stringify({ eventType: 'deleteOutbound', object: Outbound })
    );
    await MQService.sendMessage(
      'public',
      JSON.stringify({ eventType: 'deleteOutbound', object: Outbound })
    );

    return res.status(200).json('Outbound ship removed.').end();
  });
};

module.exports = {
    OutboundCreate,
    OutboundUpdate,
    OutboundDelete
};

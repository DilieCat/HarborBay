const Inbound = require('../models/inbound.model');
const MQService = require('../utils/MQService.utils');

const InboundCreate = (req, res, next) => {
  const newInbound = new Inbound({
    ship: req.body.ship,
    dateArrival: req.body.dateArrival
  });

  if(req.body.dateArrival == null){
    newInbound.dateArrival = new Date();
  }

  newInbound.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'harbor',
      JSON.stringify({ eventType: 'createInbound', object: newInbound })
    );
    

    return res.status(200).json(newInbound).end();
  });
};

const InboundUpdate = async (req, res, next) => {
  Inbound.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'harbor',
      JSON.stringify({
        eventType: 'updateInbound',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const InboundDelete = (req, res, next) => {
  Inbound.findByIdAndRemove(req.params.id, async (err, inbound) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'harbor',
      JSON.stringify({ eventType: 'deleteInbound', object: inbound })
    );
    return res.status(200).json('Inbound ship removed.').end();
  });
};

module.exports = {
    InboundCreate,
    InboundUpdate,
    InboundDelete
};

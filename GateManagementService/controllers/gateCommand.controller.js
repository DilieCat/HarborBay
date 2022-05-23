const Gate = require('../models/gate.model');
const MQService = require('../utils/MQService.utils');

const gateCreate = (req, res, next) => {
    const GateNew  = new Gate({
        Terminal: req.body.terminal,
        Number: req.body.number
    });

    GateNew.save(async (err) => {
        if (err) return next(err);

        await MQService.sendMessage(
            'gate',
            JSON.stringify({ eventType: 'createGate', object: GateNew})
        );
        return res.status(200).json(GateNew).end();
    });
};

const gateUpdate = async (req, res, next) => {
    Gate.findByIdAndUpdate(req.params.id, {$set: req.body}, async (err) => {
        if (err) return next(err);
        
        await MQService.sendMessage(
            'gate',
            JSON.stringify({
                eventType: 'updateGate',
                object: {_id: req.params.id, ...req.body}
            })
        );
        return res
            .status(200)
            .json({_id: req.params.id, ...req.body})
            .end();
    });
};

const gateDelete = (req, res, next) => {
    Gate.findByIdAndRemove(req.params.id, async (err, gate) => {
      if (err) return next(err);
      await MQService.sendMessage(
        'gate',
        JSON.stringify({ eventType: 'deleteGate', object: gate })
      );
      return res.status(200).json('Gate removed.').end();
    });
};

module.exports = {
    gateCreate,
    gateUpdate,
    gateDelete,
};
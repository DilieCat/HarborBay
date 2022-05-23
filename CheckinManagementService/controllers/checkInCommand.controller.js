const CheckIn = require('../models/checkin.model');
const MQService = require('../utils/MQService.utils');

const CheckInCreate = (req, res, next) => {
  const CheckInNew = new CheckIn({
    CheckInNumber: req.body.CheckInNumber
  });

  CheckInNew.save(async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'check_in',
      JSON.stringify({ eventType: 'createCheckIn', object: CheckInNew })
    );
    return res.status(200).json(CheckInNew).end();

  });
};

const CheckInUpdate = async (req, res, next) => {
    CheckIn.findByIdAndUpdate(req.params.id, { $set: req.body }, async (err) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'check_in',
      JSON.stringify({
        eventType: 'updateCheckIn',
        object: { _id: req.params.id, ...req.body },
      })
    );
    return res
      .status(200)
      .json({ _id: req.params.id, ...req.body })
      .end();
  });
};

const CheckInDelete = (req, res, next) => {
    CheckIn.findByIdAndRemove(req.params.id, async (err, check_in) => {
    if (err) return next(err);
    await MQService.sendMessage(
      'check_in',
      JSON.stringify({ eventType: 'deleteCheckIn', object: check_in })
    );
    return res.status(200).json('Check in removed.').end();
  });
};

module.exports = {
    CheckInCreate,
    CheckInUpdate,
    CheckInDelete,
};
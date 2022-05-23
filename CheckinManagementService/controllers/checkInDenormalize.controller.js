const CheckInRead = require('../models/checkinRead.model');

const CheckInCreate = (checkIn) => {
  const checkInNew = new CheckInRead(checkIn);

  checkInNew.save((err) => {
    if (err) console.error(err);
  });
};

const CheckInUpdate = (checkIn) => {
    CheckInRead.findByIdAndUpdate(checkIn._id, { $set: checkIn }, (err) => {
    if (err) console.error(err);
  });
};

const CheckInDelete = (checkIn) => {
    CheckInRead.findByIdAndRemove(checkIn._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
    CheckInCreate,
    CheckInUpdate,
    CheckInDelete,
};
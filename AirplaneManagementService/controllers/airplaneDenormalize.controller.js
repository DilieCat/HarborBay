const AirplaneRead = require('../models/airplaneRead.model');

const AirplaneCreate = (airplane) => {
  const airplaneNew = new AirplaneRead(airplane);

  airplaneNew.save((err) => {
    if (err) console.error(err);
  });
};

const AirplaneUpdate = (airplane) => {
  AirplaneRead.findByIdAndUpdate(fueltank._id, { $set: airplane }, (err) => {
    if (err) console.error(err);
  });
};

const AirplaneDelete = (airplane) => {
  AirplaneRead.findByIdAndRemove(airplane._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
  AirplaneCreate,
  AirplaneUpdate,
  AirplaneDelete,
};

const Airplane = require('../models/airplane.model');

const AirplaneCreate = (airplane) => {
  const airplaneNew = new Airplane(airplane);

  airplaneNew.save((err) => {
    if (err) console.error(err);
  });
};

const AirplaneUpdate = (airplane) => {
  Airplane.findByIdAndUpdate(airplane._id, { $set: airplane }, (err) => {
    if (err) console.error(err);
  });
};

const AirplaneDelete = (airplane) => {
  Airplane.findByIdAndRemove(airplane._id, (err) => {
    if (err) console.error(err);
  });
};

module.exports = {
  AirplaneCreate,
  AirplaneUpdate,
  AirplaneDelete,
};

const router = require('express').Router();

//auxillary fuel tanks
const airplaneCommand = require('../controllers/airplaneCommand.controller');
const airplaneQuery = require('../controllers/airplaneQuery.controller');

//command instructions

// command
router.post('/', airplaneCommand.AirplaneCreate);
router.put('/:id', airplaneCommand.AirplaneUpdate);
router.delete('/:id', airplaneCommand.AirplaneDelete);

// query
router.get('/:id', airplaneQuery.AirplaneOne);
router.get('/', airplaneQuery.AirplaneGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;

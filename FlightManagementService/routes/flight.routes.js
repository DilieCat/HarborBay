const router = require('express').Router();

const flightCommand = require('../controllers/flightCommand.controller');
const flightQuery = require('../controllers/flightQuery.controller');


//command instructions

// command
router.post('/',flightCommand.FlightCreate);
router.put('/:id', flightCommand.FlightUpdate);
router.delete('/:id', flightCommand.FlightDelete);

// query
router.get('/:id', flightQuery.FlightRead);
router.get('/', flightQuery.FlightGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
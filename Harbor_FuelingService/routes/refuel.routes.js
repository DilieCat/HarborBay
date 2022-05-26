const router = require('express').Router();

//auxillary fuel tanks
const refuelCommand = require('../controllers/refuelCommand.controller');

//command instructions

// command
router.put('/:id', refuelCommand.RefuelShip);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;

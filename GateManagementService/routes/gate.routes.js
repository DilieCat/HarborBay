const router = require('express').Router();

const gateCommand = require('../controllers/gateCommand.controller');
const gateQuery = require('../controllers/gateQuery.controller');

//command instructions

// command
router.post('/',gateCommand.gateCreate);
router.put('/:id', gateCommand.gateUpdate);
router.delete('/:id', gateCommand.gateDelete);

// query
router.get('/:id', gateQuery.gateRead);
router.get('/', gateQuery.gateGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
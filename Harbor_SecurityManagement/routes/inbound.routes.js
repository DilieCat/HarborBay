const router = require('express').Router();

//auxillary fuel tanks
const inboundCommand = require('../controllers/inboundCommand.controller');
const inboundQuery = require('../controllers/inboundQuery.controller');

//command instructions

// command
router.post('/', inboundCommand.InboundCreate);
router.put('/:id', inboundCommand.InboundUpdate);
router.delete('/:id', inboundCommand.InboundDelete);

// query
router.get('/:id', inboundQuery.InboundOne);
router.get('/', inboundQuery.InboundGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;

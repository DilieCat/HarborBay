const router = require('express').Router();
const replayUtility = require('../utils/replayEvents.util');
const queryRebuilt = require('../controllers/rebuild.controller');

// replay until event Nr
router.post('/', replayUtility.replayEvents);
router.delete('/', replayUtility.deleteEventStore);

// query rebuilt state
router.get('/inboundReplay/:id', queryRebuilt.InboundRead);
router.get('/inboundReplay/', queryRebuilt.InboundGetAll);

router.get('/outboundReplay/:id', queryRebuilt.OutboundRead);
router.get('/outboundReplay/', queryRebuilt.OutboundGetAll);


router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;

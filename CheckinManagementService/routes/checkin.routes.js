const router = require('express').Router();

const checkInCommand = require('../controllers/checkInCommand.controller');
const checkInQuery = require('../controllers/checkInQuery.controller');

//command instructions

// command
router.post('/',checkInCommand.CheckInCreate);
router.put('/:id', checkInCommand.CheckInUpdate);
router.delete('/:id', checkInCommand.CheckInDelete);

// query
router.get('/:id', checkInQuery.CheckInRead);
router.get('/', checkInQuery.CheckInGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;
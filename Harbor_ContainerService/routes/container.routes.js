const router = require('express').Router();

//auxillary fuel tanks
const containerCommand = require('../controllers/container/containerCommand.controller');
const containerQuery = require('../controllers/container/containerQuery.controller');

//command instructions

// command
router.post('/', containerCommand.ContainerCreate);
router.put('/:id', containerCommand.ContainerUpdate);
router.delete('/:id', containerCommand.ContainerDelete);

// query
router.get('/:id', containerQuery.ContainerOne);
router.get('/', containerQuery.ContainerGetAll);

router.use('*', (req, res) =>
  res.status(404).json({ message: 'Endpoint Not found' }).end()
);

module.exports = router;

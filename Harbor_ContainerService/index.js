const express = require('express');
const bodyParser = require('body-parser');

const container = require('./routes/container.routes');
const containerSship = require('./routes/containerShip.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/container/ship', containerShip);
app.use('/container', container);

app.listen(port, () => {
  console.info(`Started ContainerService on port ${port}`);
});
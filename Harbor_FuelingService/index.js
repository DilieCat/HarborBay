const express = require('express');
const bodyParser = require('body-parser');

const refuelRoute = require('./routes/refuel.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/refuel', refuelRoute);

app.listen(port, () => {
  console.info(`Started Ship on port ${port}`);
});
const express = require('express');
const bodyParser = require('body-parser');

const airplaneRoutes = require('./routes/airplane.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/airplane', airplaneRoutes);

app.listen(port, () => {
  console.info(`Started Flight on port ${port}`);
});
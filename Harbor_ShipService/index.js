const express = require('express');
const bodyParser = require('body-parser');

const serviceRoutes = require('./routes/service.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/service', serviceRoutes);

app.listen(port, () => {
  console.info(`Started Ship on port ${port}`);
});
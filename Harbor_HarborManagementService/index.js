const express = require('express');
const bodyParser = require('body-parser');

const inboundRoutes = require('./routes/inbound.routes');
const outboundRoutes = require('./routes/outbound.routes');
const replayRoutes = require('./routes/replay.routes');
const reportRoutes = require('./routes/report.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/harbor/inbound', inboundRoutes);
app.use('/harbor/outbound', outboundRoutes);
app.use('/harbor/replay', replayRoutes);
app.use('/harbor/report', reportRoutes);

app.listen(port, () => {
  console.info(`Started Ship on port ${port}`);
});
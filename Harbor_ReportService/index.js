const express = require('express');
const bodyParser = require('body-parser');

const report = require('./routes/report.routes');

const app = (module.exports = express());
const port = 8080;

require('./utils/database.utils');
require('./utils/MQEventListener.utils');

app.use(bodyParser.json({ extended: true }));

app.use('/report', report);

app.listen(port, () => {
  console.info(`Started ReportService on port ${port}`);
});
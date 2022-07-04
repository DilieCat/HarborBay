const ReportRead = require('../../models/report/reportRead.model');

const ReportCreate = (report) => {
  const reportNew = new ReportRead(report);

  reportNew.save((err) => {
    if (err) console.error(err);
  });
};

const ReportUpdate = (report) => {
  ReportRead.findByIdAndUpdate(fueltank._id, { $set: report }, (err) => {
    if (err) console.error(err);
  });
};

const ReportDelete = (report) => {
  ReportRead.findByIdAndRemove(report._id, (err) => {
    if (err) console.error(err);
  });
};


module.exports = {
  ReportCreate,
  ReportUpdate,
  ReportDelete,
};

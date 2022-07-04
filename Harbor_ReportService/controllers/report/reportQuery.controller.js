const ReportRead = require('../../models/report/reportRead.model');

const ReportOne = (req, res, next) => {
  ReportRead.findById(req.params.id, (err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

const ReportGetAll = (req, res, next) => {
  ReportRead.find((err, obj) => {
    if (err) return next(err);
    return res.status(200).json(obj).end();
  });
};

module.exports = {
    ReportOne,
    ReportGetAll,
};

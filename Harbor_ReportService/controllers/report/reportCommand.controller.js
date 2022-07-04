const axios = require('axios').default;
const Report = require('../../models/report/report.model');
const MQService = require('../../utils/MQService.utils');
// mogelijke haven coordinaten: 52.709448, 6.061503
const lat = 52.709448;
const lng = 6.061503;
const params = "iron,phyto,oxygen,phytoplankton,salinity";
const key = "f362b7d6-fabe-11ec-b21f-0242ac130002-f362b876-fabe-11ec-b21f-0242ac130002"

const ReportCreate = (req, res, next) => {
  axios.get('https://api.stormglass.io/v2/bio/point?lat=' + lat + '&lng=' + lng + '&params=' + params, {
    headers: {
      'Authorization': key
    }
  })
    .then(function (response) {
      console.log(response.data.hours[0])
      const newReport = new Report({
        time: response.data.hours[0].time,
        iron: response.data.hours[0].iron.sg,
        phyto: response.data.hours[0].phyto.sg,
        oxygen: response.data.hours[0].oxygen.sg,
        phytoplankton: response.data.hours[0].phytoplankton.sg,
        salinity: response.data.hours[0].salinity.sg
      });

      newReport.save(async (err) => {
        if (err) return next(err);
    
        await MQService.sendMessage(
          'report',
          JSON.stringify({ eventType: 'reportCreated', object: newReport })
        );
    
        return res.status(200).json(newReport).end();
      });

    })
    .catch(function (error) {
      console.log(error)
      return res.status(503).json({ message: 'Storm Glass API unavailable', error: error }).end();
    })
};

const ReportDelete = (req, res, next) => {
  Report.findByIdAndRemove(req.params.id, async (err, report) => {
    if (err) return next(err);

    await MQService.sendMessage(
      'report',
      JSON.stringify({ eventType: 'reportRemoved', object: report })
    );
    
    return res.status(200).json('Report removed.').end();
  });
};

// Geen update! Je kan en wilt een report van een bepaald punt niet aanpassen.

module.exports = {
    ReportCreate,
    ReportDelete
};

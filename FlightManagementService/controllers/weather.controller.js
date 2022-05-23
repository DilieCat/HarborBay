const axios=require('axios');

const getWeather = (req, res, next) => {
    axios.get('https://weerlive.nl/api/json-data-10min.php?key=5744b2fe85&locatie=Amsterdam')
    .then(function (obj) {
    return res.status(200).json(obj.data).end()
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
   };

module.exports = {
    getWeather
};
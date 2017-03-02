var axios = require('axios');

const APIXU_URL = 'https://api.apixu.com/v1/current.json?key=56a24c1b7e474877a5615750170103';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${APIXU_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.error) {
        throw new Error('Unable to fetch weather for that city.');
      } else {
        return res.data.current.temp_c;
      }
    }, function(err) {
      throw new Error('Unable to fetch weather for that city.');
    });
  }
}
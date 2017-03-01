var axios = require('axios');

const APIXU_URL = 'http://api.apixu.com/v1/current.json?key=56a24c1b7e474877a5615750170103';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${APIXU_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.error) {
        throw new Error(res.data.error.message);
      } else {
        return res.data.current.temp_c;
      }
    }, function(res) {
      throw new Error(res.data.error.message);
    });
  }
}
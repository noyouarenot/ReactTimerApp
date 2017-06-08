var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=2bbb07b86ce8147bc8cfdcdc81d9a53c&units=imperial';
//2bbb07b86ce8147bc8cfdcdc81d9a53c
//api.openweathermap.org/data/2.5/weather?q=London,uk
module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return  axios.get(requestUrl).then(function(res){
    debugger;
      if(res.data.cod && res.data.message){
        throw new Error('Unable to fetch weather')
      }else {
        return res.data.main.temp;
      }
    },function(res){
      throw new Error('Unable to fetch weather');
    });

  }
}

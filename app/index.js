// css
require('./css/style.css');

// forecast.io API
const api = require('./API');
// forcast.io key
const key = 'e86040057bd90cc9c9aa967057321cbd';

// user location API
const location = require('./location');

// hbs template
const homeTemplate = require('./templates/daily.handlebars');

//time format
const moment = require('moment');


/**
 * Forecast.io API calback.
 * limit results to 5
 * format date
 */
const formatData = (data) => {
  let daily = data.daily.data.splice(0,5).map(function(value){
    let dateString = moment.unix(value.time).format("MM/DD/YYYY");
    value.dateString = dateString;
    return value;
  });
  render(daily);
};

/**
 * Display view
 */
const render = (data) => document.body.innerHTML = homeTemplate({data:data});

/**
 * Get user location and on result ... make forecast.io api call.
 * Flow STARTS here. :)
 */
location.getLocation((position) => {
  api.getForecast(formatData, key, position.coords.latitude, position.coords.longitude);
});

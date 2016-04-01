/**
 * Forecast.io API
 * @param {requestCallback}  cb call back
 * @param {string}           key Forecast key
 * @param {string}           lat latitude
 * @param {string}           lng longitude
 *
 * Wraps ajax call to the forecast api. results are returned via call back.
 */
function getForecast(cb, key, lat, lng) {

  let url = 'https://api.forecast.io/forecast/'+key+'/'+lat+','+lng;

  $.ajax({
    url: url,
    dataType: "jsonp",
    success: cb,
    error: function(e) {
      console.error('something went wrong', e);
    }
  });
}
module.exports = {getForecast};

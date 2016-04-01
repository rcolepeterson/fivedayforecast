/**
 * Get the users latitude and longitude. Results passed back via call back.
 * @param {requestCallback}  cb call back
 */
function getLocation(cb) {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(cb);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}
module.exports = {getLocation};

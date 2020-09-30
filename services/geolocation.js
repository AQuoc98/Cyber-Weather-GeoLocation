const request = require("request");

const key = "AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4"

// callback la do chung ta tu dinh nghia
// callback(error, result)
// error: string
// result: object {lat, lng}
const callGeolocation = (address, callback) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`
  request({ url, json: true },
    function (error, response, body) {
      // Handle error
      if (error) return callback("Cannot connect to Google API", null)
      if (body.status === "ZERO_RESULTS") return callback("Address Not Found", null)

      const lat = body.results[0].geometry.location.lat
      const lng = body.results[0].geometry.location.lng

      console.log(`Address: ${body.results[0].formatted_address}`)

      callback(null, { lat, lng })
    });
}

// export default callGeolocation
module.exports = callGeolocation


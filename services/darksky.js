const request = require("request");

function darksky(lat, lng, callback) {
  request({
    url: `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    console.log(`Summary:  ${body.currently.summary}`)
    console.log(`Temperature:  ${body.currently.temperature}`)
    // callback(body.currently.summary)
  })
}

module.exports = darksky;
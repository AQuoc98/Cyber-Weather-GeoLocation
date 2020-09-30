const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address', // viet tat --address --> -a
      describe: "Enter address",
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv

address = argv.address

const key = "AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4"
const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`
axios
  .get(geoUrl)
  .then(res => { // res.data (axios) = body (request)
    // if (res.data.status === 'ZERO_RESULTS') throw new Error("Not found")
    if (res.data.status === 'ZERO_RESULTS') return Promise.reject({ myWarning: "Not Found" })

    // xu ly truong hop thanh cong
    console.log(`Address: ${res.data.results[0].formatted_address}`)
    const lat = res.data.results[0].geometry.location.lat
    const lng = res.data.results[0].geometry.location.lng
    const darkskyUrl = `https://api.darksky.net/forecast/b8164e69c9f7fbc654f20d2d6381d1fc/${lat},${lng}`
    return axios.get(darkskyUrl)
  })
  .then(res => {
    console.log(`Summary:  ${res.data.currently.summary}`)
    console.log(`Temperature:  ${res.data.currently.temperature}`)
  })
  .catch((err) => {
    if (err.myWarning) return console.log(err.myWarning)
    console.log("Cannot connect to Google APi")
  })
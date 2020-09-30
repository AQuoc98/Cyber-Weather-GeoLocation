const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address", // viet tat --address --> -a
      describe: "Enter address",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

address = argv.address;

const callGeolocation = async address => {
  const key = "AIzaSyCpffFx5sZstG6aclYoEnodK4Nj5DF14F4";
  const geourl = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${address}`;

  let res;
  try {
    res = await axios.get(geourl);
    try {
      const lat = res.data.results[0].geometry.location.lat;
      const lng = res.data.results[0].geometry.location.lng;
      console.log(`Address: ${res.data.results[0].formatted_address}`);
      await callDarkSky(lat, lng);
    } catch (error) {
      console.log("Not Found");
    }
  } catch (error) {
    console.log("Cannot connect");
  }
};

const callDarkSky = async (lat, lng) => {
  const res = await axios.get(
    `https://api.darksky.net/forecast/713164748080113e5ea2881e3c550f8e/${lat},${lng}`
  );
  console.log(`Summary: ${res.data.currently.summary}`);
  console.log(`Temperature: ${res.data.currently.temperature}`);
};

callGeolocation(address);


// app-async-await

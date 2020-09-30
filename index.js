const request = require('request'); // import request from 'request
const yargs = require('yargs');

const callGeolocation = require('./services/geolocation');
const darksky = require('./services/darksky');

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
  .argv //Lưu trữ kết quả tại argv

  
  address = argv.address
  
  callGeolocation(address, (err, result) => {
    if (err) return console.log(err)
    
    darksky(result.lat, result.lng, (err,res)=> {
      if(err) console.log(err)
      if(res) console.log(res)
    })
  })
  
  // run : node index.js -a "82 ung van khiem"
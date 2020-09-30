const request = require("request"); // import request from 'request'
const yargs = require("yargs");

const callGeolocation = require("../services/geolocation");

address = "New York";

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: "address",
      describe: "Enter address",
      string: true
    }
  })

  .help()
  .alias("help", "h").argv;
// node .\playground\index.js -a "washington"

address = argv.address;

callGeolocation(address);

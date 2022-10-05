//Imports/Requires
const devLogger = require("./devLogger");
const prodLogger = require("./prodLogger");
require('dotenv').config()

//Var
let logger = null;
let env = process.env.LOCATION_ENV;

logger = env === "dev" ? devLogger() : prodLogger();


module.exports = logger;

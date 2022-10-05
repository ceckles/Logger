const winston = require('winston');
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, printf, colorize, json} = format;
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');

require('dotenv').config()


const devLogger = () => {
  let logtail = new Logtail(`${process.env.LOG_Token}`);

  const myFormat = printf(({ level, message, timestamp, label }) => {
    return `${timestamp}: ${level}: ${message}`;
  });

  const options = {
    console: {
      handleExceptions: true,
      level: "debug",
      format: combine(colorize(),timestamp({ format: "YYYY:MM:DD:HH:MM:SS" }), myFormat),
    },
    error: {
      filename: "error.log",
      level: "error",
      format: combine(timestamp({ format: "YYYY:MM:DD:HH:MM:SS" }),myFormat),
    },
    allErrors: {
      filename: "combinedLog.log",
      defaultMeta: { service: "user-service" },
      level: "debug",
      format: combine(timestamp({ format: "YYYY:MM:DD:HH:MM:SS" }), myFormat),
    },
    logtail:{

    }
  };

  return logger = createLogger({
    level: 'debug',
    format: 
    json(),
    //combine(colorize(),timestamp({format: "MMM:DD:YYYY:HH:MM:SS"}), myFormat),
    defaultMeta: { service: 'user-service' },
    transports: [
      //add or remove transports as needed
      new transports.Console(options.console),
      new transports.File(options.error),
      new transports.File(options.allErrors),
      new LogtailTransport(logtail)
    ],
    exitOnError: false
  });
};

module.exports = devLogger;
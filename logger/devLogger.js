//format.json(),
const winston = require("winston");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize, json } = format;

const devLogger = () => {

  const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} : ${level} : ${message}`;
  });

  const options = {
    console: {
      handleExceptions: true,
      level: "debug",
      format: combine(colorize(),timestamp({ format: "YYYY:MM:DD:HH:MM:SS" }), myFormat),
    },
    error: {
      filename: "logs/error.log",
      level: "error",
      format: combine(timestamp({ format: "YYYY:MM:DD:HH:MM:SS" }),myFormat),
    },
    allErrors: {
      filename: "logs/combinedLog.log",
      defaultMeta: { service: "user-service" },
      level: "debug",
      format: combine(timestamp({ format: "YYYY:MM:DD:HH:MM:SS" }), myFormat),
    },
  };

  return (logger = createLogger({
    level: "debug",
    transports: [
      //add or remove transports as needed
      new transports.Console(options.console),
      new transports.File(options.error),
      new transports.File(options.allErrors),
    ],
    exitOnError: false,
  }));
};

module.exports = devLogger;

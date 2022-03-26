const moment = require('moment');
const fs = require('fs');

const logging = (req, res, next) => {
  const logTimeFormat = moment().format('hh:mm DD/MM/YYYY');
  const httpMethod = req.method;
  const path = req.path;

  fs.appendFileSync(`${__dirname}/.logs`, `${httpMethod} ${path} ${logTimeFormat}` + `\n`);
  console.log(`${httpMethod} ${path} ${logTimeFormat}` + `\n`);
  next();
};

module.exports = logging;

const {buildDevLogger,buildProdLogger} = require('./logger/index');
const dotenv = require('dotenv');

let logger = null;

if(dotenv.config().parsed.NODE_ENV === 'Dev'){
    logger = buildDevLogger();
}else{
    logger = buildProdLogger();
}

logger.info('info logger');
logger.warn("warning logger");
logger.debug("debug logger");
logger.error("error logger");
//logger.error(new Error('New Error Stack'))

/*console.log('hello');
console.info('text info');
console.warn('text warn');
console.error('text error');
console.error(new Error('something went wrong'));*/
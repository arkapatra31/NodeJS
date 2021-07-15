const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf, errors, json } = format;

function buildDevLogger(){
    //Creating Custom Logger
    const logFormat = printf(({level,message,timestamp,stack}) => {
        return `${timestamp} ${level}: ${stack || message}`;
    })

    return createLogger({
        level : 'debug',
        /* format : format.json(), */
        //Using my custom format
        format : combine(
            format.colorize(),timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),logFormat
        ),
        defaultMeta : {service : 'user-service'},
        transports : [
            new transports.Console(),
            //new winston.transports.File({filename:'access.log'})
        ]
    })
}



module.exports = buildDevLogger;
const { format, createLogger, transports } = require('winston');
const { timestamp, combine,colorize, printf, errors, json } = format;
var path = require('path')

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
            colorize(),timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),logFormat
        ),
        defaultMeta : {service : 'user-service'},
        transports : [
            new transports.File({filename: 'log/dev/data.log'}),
            new transports.File({filename: 'log/dev/access.err', level: 'err'}),
            new transports.Console()
        ]
    })
}



module.exports = buildDevLogger;
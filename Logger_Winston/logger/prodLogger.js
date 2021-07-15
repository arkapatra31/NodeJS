const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf, errors, json } = format;

function buildProdLogger(){
    return createLogger({
        level : 'debug',
        format : combine(
                timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
                errors({stack : true}),
                json(),
        ),
        defaultMeta : {service : 'user-service'},
        transports : [
            new transports.Console(),
            //new winston.transports.File({filename:'access.log'})
        ]
    })
}



module.exports = buildProdLogger;
const { format, createLogger, transports, level } = require('winston');
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
            
            new transports.File({filename: 'log/prod/data.log'}),
            new transports.File({filename: 'log/prod/access.err', level: 'err'})
        ]
    })
}



module.exports = buildProdLogger;
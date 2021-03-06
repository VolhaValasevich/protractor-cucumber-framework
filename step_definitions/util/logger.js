const {createLogger, format, transports, addColors} = require('winston');
const {combine, timestamp, label, printf} = format;

const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const myCustomLevels = {
    levels: {
        fail: 0,
        action: 1,
        info: 2,
        check: 3
    },
    colors: {
        fail: 'red',
        action: 'yellow',
        info: 'white',
        check: 'blue'
    }
};

addColors(myCustomLevels.colors);

class Logger {
    constructor() {
        this.logger = createLogger({
            levels: myCustomLevels.levels,
            transports: [
                new transports.Console({
                    format: combine(
                        label({label: 't-mobile.com'}),
                        timestamp({
                            format: 'YYYY-MM-DD HH:mm:ss'
                        }),
                        format.colorize({
                            all: true
                        }),
                        myFormat
                    ),
                    level: "check"
                }),
                new transports.File({filename: 'combined.log', format: format.simple(), level: "check"})
            ]
        });
    }
}

module.exports = new Logger();
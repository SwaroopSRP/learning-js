const fs = require("fs");
const os = require("os");
const EventLogger = require("events");

class Logger extends EventLogger {
    constructor(logFileLoc) {
        super();
        this.logFile = logFileLoc;
        this.on("logMessage", this.logToFile);
    }

    push(eventMsg) {
        this.emit("logMessage", { eventMsg });
    }

    logToFile(event) {
        const logMsg = `[${new Date().toLocaleString()}] ${event.eventMsg}\n`;
        fs.appendFileSync(this.logFile, logMsg);
    }
}


const logFile = "./bruh.log";
const logger = new Logger(logFile);

logger.push("App started!");

setInterval(() => {
    const memUsage = (os.freemem() / os.totalmem()) * 100;
    logger.push(`Current Memory Usage at ${memUsage.toFixed(1)}%`);
}, 3000);

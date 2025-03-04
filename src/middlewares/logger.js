import config from '../config/env.js';
import winston from 'winston';

const loggerFormat = winston.format.printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}]: ${message}`;
});

export const logger = winston.createLogger({
	level: config.NODE_ENV === 'development' ? 'debug' : 'info',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		loggerFormat,
	),
	transports: [
		new winston.transports.File({ filename: 'logs/app.log' }),
		new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
		new winston.transports.Console(),
	],
});

export const logMiddleware = (req, res, next) => {
	if (req.url !== '/favicon.ico') logger.info(`${req.method} ${req.url}`);
	next();
};

import winston, { transports } from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [new winston.transports.Console()],
});

export const logMiddleware = (req, res, next) => {
	logger.info(`${req.method} ${req.url}`);
	next();
};

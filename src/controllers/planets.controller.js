import { getPlanetReport } from '../services/planet.service.js';
import { logger } from '../middlewares/logger.js';

export const getPlanet = async (req, res, next) => {
	try {
		logger.info('Fetching report planet...');
		const { id } = req.params;
		if (!id || isNaN(id)) {
			logger.error('ID planet is required');
			return res
				.status(400)
				.json({ error: 'El ID del planeta debe ser un número válido.' });
		}

		const report = await getPlanetReport(id);

		if (!report.affiliationReport || report.affiliationReport.length == 0) {
			logger.error('The planet has no registered characters');
			return res
				.status(400)
				.json({ error: 'El planeta no tiene personajes registrados.' });
		}
		logger.info(`Report planet: "${report.name}" - fetched successfullly`);
		res.json(report);
	} catch (error) {
		next(error);
	}
};

import { getPlanetReport } from '../services/planet.service.js';

export const getPlanet = async (req, res, next) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res
				.status(400)
				.json({ error: 'El ID del planeta es obligatorio' });
		}

		const report = await getPlanetReport(id);
		res.json(report);
	} catch (error) {
		next(error);
	}
};

import { fetchCharacters } from '../services/character.service.js';
import { logger } from '../middlewares/logger.js';

export const getCharacters = async (req, res, next) => {
	try {
		logger.info('Fetching characters...');
		const { race, affiliation } = req.query;

		const filters = {};

		if (race) filters.race = race;
		if (affiliation) filters.affiliation = affiliation;

		const characters = await fetchCharacters(filters);
		logger.info('Characters fetched successfully');
		res.json(characters);
	} catch (error) {
		next(error);
	}
};

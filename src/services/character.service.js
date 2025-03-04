import { logger } from '../middlewares/logger.js';
import { dragonBallApi } from '../utils/apiClientFactory.js';

export const fetchCharacters = async (filters) => {
	try {
		logger.debug(`Fetching characters with filter: ${JSON.stringify(filters)}`);
		const response = await dragonBallApi.get(`/characters`, {
			params: filters,
		});
		logger.debug(`Characters found: ${response.data.items.length}`);
		return response.data;
	} catch (error) {
		logger.error(`Error in character service: ${error.message}`);
		throw new Error('No se pudo obtener la lista de personajes.');
	}
};

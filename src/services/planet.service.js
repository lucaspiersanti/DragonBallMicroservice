import {
	findByPlanetId,
	savePlanet,
} from '../repositories/planet.repository.js';
import { logger } from '../middlewares/logger.js';
import { dragonBallApi } from '../utils/apiClientFactory.js';

const fetchPlanetFromApi = async (planetId) => {
	try {
		logger.debug(`Fetching planet whit id: ${planetId}`);
		const response = await dragonBallApi.get(`/planets/${planetId}`);
		logger.debug(`Planet found: ${JSON.stringify(response.data.name)}`);
		return response.data;
	} catch (error) {
		throw new Error(
			`Error en API externa: No se pudo obtener el planeta: ${error.message}`,
		);
	}
};

const groupCharactersByAffiliation = (characters) => {
	if (!Array.isArray(characters)) {
		throw new Error('Se esperaba un array de personajes');
	}

	const grouped = characters.reduce((acc, char) => {
		const affiliation = char.affiliation || 'Unknown';
		if (!acc[affiliation]) acc[affiliation] = [];

		acc[affiliation].push({
			id: char.id,
			name: char.name,
			ki: char.ki ? parseInt(char.ki.replace(/\./g, ''), 10) || 0 : 0,
			race: char.race,
			image: char.image,
		});
		return acc;
	}, {});

	return Object.entries(grouped).map(([affiliation, characters]) => ({
		affiliation,
		characters: characters.sort((a, b) => b.ki - a.ki),
	}));
};

export const getPlanetReport = async (planetId) => {
	const existingReport = await findByPlanetId(planetId);
	if (existingReport) return existingReport;

	const planetData = await fetchPlanetFromApi(planetId);
	const characters = groupCharactersByAffiliation(planetData.characters) || [];

	const report = {
		planetId: planetId,
		name: planetData.name,
		affiliationReport: characters,
	};
	return await savePlanet(report);
};

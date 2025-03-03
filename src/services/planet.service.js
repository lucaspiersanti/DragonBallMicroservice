import axios from 'axios';
import {
	findByPlanetId,
	savePlanet,
} from '../repositories/planet.repository.js';

const API_URL = 'http://dragonball-api.com/api';

const fetchPlanetFromApi = async (planetId) => {
	try {
		const response = await axios.get(`${API_URL}/planets/${planetId}`);
		console.info(`[Info]: ${JSON.stringify(response.data, null, 2)}`);
		return response.data;
	} catch (error) {
		console.error(`Error obteniendo planeta ${planetId}`, error.message);
		throw new Error('No se pudo obtener el planeta de la API externa');
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

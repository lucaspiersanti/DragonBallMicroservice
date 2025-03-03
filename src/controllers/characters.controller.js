import { fetchCharacters } from '../services/character.service.js';

export const getCharacters = async (req, res, next) => {
	try {
		const { race, affiliation } = req.query;
		const filters = {};

		if (race) filters.race = race;
		if (affiliation) filters.affiliation = affiliation;

		const characters = await fetchCharacters(filters);
		res.json(characters);
	} catch (error) {
		next(error);
	}
};


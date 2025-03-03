import Planet from '../models/planet.model.js';

export const findByPlanetId = async (planetId) =>
	await Planet.findOne({ planetId });

export const savePlanet = async (planetData) => {
	const planet = new Planet(planetData);
	return await planet.save();
};

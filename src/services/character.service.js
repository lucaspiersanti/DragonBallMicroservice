import axios from 'axios';

const API_URL = 'http://dragonball-api.com/api';

export const fetchCharacters = async (filters) => {
	try {
		const response = await axios.get(`${API_URL}/characters`, {
			params: filters,
		});
		return response.data;
	} catch (error) {
		console.error('❌ Error obteniendo personajes:', error.message);
		throw new Error('No se pudo obtener la lista de personajes.');
	}
};

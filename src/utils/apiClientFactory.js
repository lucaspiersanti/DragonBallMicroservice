import axios from 'axios';
import config from '../config/env.js';
import { logger } from '../middlewares/logger.js';

const apiClientFactory = (baseURL) => {
	return {
		get: async (endpoint, params = {}) => {
			logger.info(`URL: ${baseURL}${endpoint}`);
			const response = await axios.get(`${baseURL}${endpoint}`, { params });
			return response;
		},
	};
};

export const dragonBallApi = apiClientFactory(config.EXTERNAL_API_URL);

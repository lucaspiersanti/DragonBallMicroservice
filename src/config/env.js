import 'dotenv/config';

export default {
	PORT: process.env.PORT || 5000,
	MONGO_URI: process.env.MONGO_URI,
	EXTERNAL_API_URL: process.env.EXTERNAL_API_URL,
	NODE_ENV: process.env.NODE_ENV,
};

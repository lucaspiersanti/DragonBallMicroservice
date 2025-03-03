import mongoose from 'mongoose';
import config from './env.js';

const connectDB = async () => {
	try {
		console.log(config.MONGO_URI);
		await mongoose.connect(process.env.MONGO_URI);
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.log('MongoDB connection error: ', error.message);
		process.exit(1);
	}
};

export default connectDB;

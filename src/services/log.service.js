import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readLogFile = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				reject(`Error reading log file: ${filePath}`);
			}
			resolve(data);
		});
	});
};

export const readLogs = async () => {
	try {
		// Construye las rutas a los archivos de logs
		const appLogPath = path.join(__dirname, '../../logs/app.log');
		const errorLogPath = path.join(__dirname, '../../logs/error.log');

		const appLogs = await readLogFile(appLogPath);
		const errorLogs = await readLogFile(errorLogPath);

		return {
			appLogs,
			errorLogs,
		};
	} catch (error) {
		throw new Error(error);
	}
};

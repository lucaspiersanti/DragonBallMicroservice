import { readLogs } from '../services/log.service.js';

export const getLogs = async (req, res) => {
	try {
		const { appLogs, errorLogs } = await readLogs();

		res.send(`
            <h1>App Logs</h1>
            <pre>${appLogs || 'No hay logs disponibles'}</pre>
            <h1>Error Logs</h1>
            <pre>${errorLogs || 'No hay logs de errores disponibles'}</pre>
        `);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

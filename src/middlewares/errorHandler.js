import { logger } from './logger.js';

const errorHandler = (err, req, res, next) => {
	logger.error({
		message: err.message,
		stack: err.stack,
		metadata: err,
	});

	if (err.message.includes('API externa')) {
		return res.status(502).json({
			error: 'Error al comunicarse con la API externa.',
			details: err.message,
		});
	}

	if (err.message.includes('El planeta no tiene')) {
		return res.status(404).json({ error: err.message });
	}

	res.status(500).json({
		error: 'Ocurrió un error en el servidor',
		message: err.message || 'Error interno del servidor',
	});
};

export default errorHandler;

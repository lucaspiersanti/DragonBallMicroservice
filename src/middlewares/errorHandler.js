const errorHandler = (err, req, res, next) => {
	console.log(`Error: ${err.message}`);
	res.status(500).json({ error: err.message || 'Error interno del servidor' });
};

export default errorHandler;

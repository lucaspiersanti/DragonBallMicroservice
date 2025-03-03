import app from './app.js';
import config from './config/env.js';

const PORT = config.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Servidor corriendo en http://localhost:${PORT}`),
);

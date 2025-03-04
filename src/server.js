import app from './app.js';
import config from './config/env.js';
import { logger } from './middlewares/logger.js';

const PORT = config.PORT || 5000;

app.listen(PORT, () =>
	logger.info(`Servidor corriendo en http://localhost:${PORT}`),
);

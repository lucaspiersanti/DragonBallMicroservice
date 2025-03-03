import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import getCharacters from './routes/characters.routes.js';
import planetRoutes from './routes/planet.routes.js';
import errorHandler from './middlewares/errorHandler.js';
import { logMiddleware } from './middlewares/logger.js';

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use(logMiddleware)

// app.use('/', (req, res) => {
// 	res.send('API Dragon Ball funcionando...');
// });

app.use('/api/characters', getCharacters);
app.use('/api/planets', planetRoutes);

app.use(errorHandler);

export default app;

import express from 'express';
import { getPlanet } from '../controllers/planets.controller.js';

const router = express.Router();

router.get('/:id', getPlanet);

export default router;

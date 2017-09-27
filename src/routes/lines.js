import express from 'express';
import LineController from '../controller/LineController'

const router = express.Router();
const lineController = new LineController();

router.get('/', lineController.getAll.bind(lineController));

export default router;
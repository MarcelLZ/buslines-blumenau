import lineRouter from './lines';
import express from 'express';

const router = express.Router();

router.use('/lines', lineRouter);

export default router;
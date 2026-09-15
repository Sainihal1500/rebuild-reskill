import { Router } from 'express';
import aiRouter from './ai.js';
import dataRouter from './data.js';
const router = Router();
router.get('/health', (_req,res)=>res.json({status:'ok'}));
router.use('/ai', aiRouter);
router.use('/', dataRouter);
export default router;

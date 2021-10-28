import { Router } from 'express';
import { getTest, list } from '../controllers/portfolio.controller';
const router = Router();

router.get('/getTest', getTest);
router.post('/list', list);

export default router;

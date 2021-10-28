import express, { Router } from 'express';
import PortfolioRoutes from './portfolio.route';

const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/api/portfolio', PortfolioRoutes)

export default router;
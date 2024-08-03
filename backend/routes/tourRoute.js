import express from 'express'
import { createTour, updateTour, deleteTour, getsingleTour, getAllTour, getSearchTour, getFeaturedTour, getTourCount } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/', verifyAdmin, createTour);

router.put('/:id', verifyAdmin, updateTour);

router.delete('/:id',verifyAdmin,  deleteTour);

router.get('/:id',getsingleTour);

router.get('/', getAllTour);

router.get('/search/getsearchTour', getSearchTour);

router.get('/search/getfeaturedTour', getFeaturedTour);

router.get('/search/getTourCount', getTourCount);

export default router;
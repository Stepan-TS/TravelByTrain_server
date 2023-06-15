import express from 'express';
import controllers from '../controllers/index.js'

// @route GET && POST - /posts/

export const router = express.Router()
router.use(express.json());
router.get('/', controllers.getTrains)

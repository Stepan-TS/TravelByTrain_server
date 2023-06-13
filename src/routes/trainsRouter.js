import express, { Router } from 'express';
import { trainsController } from "../controllers/trainsController.js";

export const trainsRouter = new express.Router();

trainsRouter.get('/train', trainsController.getAll);
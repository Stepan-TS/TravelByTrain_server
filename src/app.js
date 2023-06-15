import express from 'express';
import moment from 'moment';
import { router as trainsRouter } from './routes/trains.js';
import { router as allTrainsRouter } from './routes/allTrains.js';
import { router as citiesRouter } from './routes/cities.js';

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Middleware
app.use(express.json()); // parse json bodies in the request object

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use('/', citiesRouter);
app.use('/trains', trainsRouter);
app.use('/allTrains', allTrainsRouter);

app.get('/', (req, res) => {
  res.send("server is working!")
})

// Listen on pc port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
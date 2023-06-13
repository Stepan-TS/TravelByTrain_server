import express from 'express';
import cors from 'cors';
import { trainsRouter } from './routes/trainsRouter.js';

const app = express();

app.use(cors());
app.use(trainsRouter);

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
  res.send("This is trains app!");
});

app.get('/trains', (req, res) => {
  const city1 = req.query.city1;
  const city2 = req.query.city2;

  console.log(city1)
  // Do something with the city names
  // ...

  // Send a response back to the client
  res.send(trains.filter(train => train.from === "Lviv"));
});


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

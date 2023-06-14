import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';

import { trainsRouter } from './routes/trainsRouter.js';
import { getAllData } from './models/train.js';

const app = express();
dotenv.config();

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

const pool = mysql.createPool({
  host: process.env.MySql_HOST,
  user: process.env.MySql_USER,
  password: process.env.MySql_PASSWORD,
  database: process.env.MySql_DATABASE,
});

pool.query(`SELECT * FROM Trains`, (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }

  // Process the query results
  console.log('Query results:', results);
});

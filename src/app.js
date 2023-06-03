import express from 'express';

const app = express();

let trains = [
  { id: '1', number: '001' },
  { id: '2', number: '002' },
];

app.get('/trains', (req, res) => {
  res.send(trains);
});

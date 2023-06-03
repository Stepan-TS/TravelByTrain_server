import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

let trains = [
  { id: '1', number: '001' },
  { id: '2', number: '002' },
];

app.get('/', (req, res) => {
  res.sendFile('Trains');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5050;

let trains = [
  { id: '1', number: '001', from: "Lviv", to: "Kyiv" },
  { id: '2', number: '002', from: "Lutsk", to: "Kyiv" },
  { id: '3', number: '003', from: "Lviv", to: "Kyiv" },
  { id: '4', number: '004', from: "Lutsk", to: "Kyiv" },
  { id: '5', number: '005', from: "Lviv", to: "Kyiv" },
  { id: '6', number: '006', from: "Radehiv", to: "Kyiv" },
  { id: '7', number: '007', from: "Lviv", to: "Kyiv" },
  { id: '8', number: '008', from: "Lviv", to: "Kyiv" },
  { id: '9', number: '009', from: "Rahiv", to: "Kyiv" },
]

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

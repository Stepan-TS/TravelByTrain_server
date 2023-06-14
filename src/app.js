const express = require("express");
const cors = require("cors");
const trainsRouter = require('./routes');
const { getFilterTrains, createTrain } = require("./controllers");

const app = express();
app.use(cors());

app.use(trainsRouter);;

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;

const AppError = require("../utils/appError");
const conn = require("../services/db");
const { v4: uuidv4 } = require('uuid');

exports.getAllTrains = (req, res, next) => {
  conn.query("SELECT * FROM Trains", function (err, data, fields) {
    if (err) return next(new AppError(err))
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createTrain = (req, res) => {
  const values = ['3', 'Lviv', 'Kyiv', '2023-06-15', '2023-06-15', '12:00:00', '22:00:00', '22'];

  const q = "INSERT INTO Trains (id, departureСity, arrivalСity, departureDate, arrivalDate, departureTime, arrivalTime, TrainNumber) VALUES(?)";
    
  conn.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New Train has been created successfully!");
  });
};

exports.getFilterTrains = (req, res, next) => {
const { arrivalCity } = req.params;
  if (!arrivalCity) {
    return next(new AppError("No params found", 404))
  }
  console.log(arrivalCity);
  conn.query(
    `SELECT *
    FROM Trains
    WHERE arrivalСity = ?
    ` [req.params.arrivalСity],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  )
}

exports.getInfo = (req, res, next) => {
  res.send("Server!");
};
import { pool } from '../config/db.js';
import { cities } from '../config/ua.js';

const getAllTrains = async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Trains");

    res.status(200).json({ count: rows.length, trains: rows });
  } catch (error) {
    next(error);
  }
}

const getTrains = async (req, res, next) => {
  try {
    const city1 = req.query.city1;
    const city2 = req.query.city2;
    console.log(city1);
    console.log(city2);

    const queryWeek = `
      SELECT * 
      FROM Trains 
        WHERE 
          departureCity = "${city1}" AND
          arrivalCity = "${city2}"
      `;

    const [rows] = await pool.query(queryWeek);

    res.status(200).json({ count: rows.length, trains: rows });
  } catch (error) {
    next(error);
  }
};

const createNewTrain = async (req, res, next) => {
    try {
      let { 
        id,
        departureCity, 
        arrivalCity, 
        departureDate, 
        arrivalDate, 
        departureTime, 
        arrivalTime, 
        trainNumber
    } = req.body;
      let post = new Train(
        id,
        departureCity, 
        arrivalCity, 
        departureDate, 
        arrivalDate, 
        departureTime, 
        arrivalTime, 
        trainNumber
      );
  
      train = await post.save();
  
      res.status(201).json({ message: "Post created" });
    } catch (error) {
      next(error);
    }
  };

  const handleFilterQuery = (cities, city) => {
    return cities.filter(c => c.city.toLocaleLowerCase().includes(city.toLocaleLowerCase()))
  }

  const getCities = async (req, res, next) => {
    try {
      const city = req.query.city;

      if (!city) {
        res.send("Server is working!");
      }

      res.send(handleFilterQuery(cities, city));
    } catch (error) {
      next(error);
    }
  }

  export default { getTrains, createNewTrain, getCities, getAllTrains }
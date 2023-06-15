import { pool } from '../config/db.js';
import { cities } from '../config/ua.js';
import { v4 as uuidv4 } from 'uuid';

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
      const id = uuidv4();
      const { 
        departureCity, 
        arrivalCity, 
        departureDate, 
        arrivalDate, 
        departureTime, 
        arrivalTime, 
        trainNumber
    } = req.body;
      
    const query = `INSERT INTO Trains 
                  (id, departureCity, arrivalCity, departureDate, 
                  arrivalDate, departureTime, arrivalTime, trainNumber) 
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    
    const values = [id, departureCity, arrivalCity, departureDate, arrivalDate, departureTime, arrivalTime, trainNumber];
                    
      await pool.query(query, values);
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

      const filteredCities = handleFilterQuery(cities, city);
      res.send(filteredCities);
    } catch (error) {
      next(error);
    }
  }

  export default { getTrains, createNewTrain, getCities, getAllTrains }
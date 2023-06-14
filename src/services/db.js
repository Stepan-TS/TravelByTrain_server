const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.MySql_HOST,
  user: process.env.MySql_USER,
  password: process.env.MySql_PASSWORD,
  database: process.env.MySql_DATABASE,
})

conn.connect();

module.exports = conn;
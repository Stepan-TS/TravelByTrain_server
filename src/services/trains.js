import mysql from 'mysql2/promise';



export const db = await mysql.createConnection({ 
  host: process.env.MySql_HOST,
  user: process.env.MySql_USER,
  password: process.env.MySql_PASSWORD,
  database: process.env.MySql_DATABASE,
});


import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7625952',
  database: 'sql7625952',
  password: 'd2hQvHCgiV',
});
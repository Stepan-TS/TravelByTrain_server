import { sequelize } from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Train = sequelize.define('train', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }, 
  departureСity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  arrivalCity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departureDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  arrivalDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  arrivalTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  TrainNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Trains',
  createdAt: false,
  updatedAt: false
})

export async function getAllData() {
  const result = await Train.findAll();

  return result
}

import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Weather = sequelize.define("weathers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    temp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    feels_like: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    temp_max: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    temp_min: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    humidity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
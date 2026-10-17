import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    categoryName: {
      type: DataTypes.STRING,
      references: {
        model: "Category",
        key: "name",
      },
    },
  },
  {
    tableName: "Products",
    timestamps: false,
  }
);

export default Products;
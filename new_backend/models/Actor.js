const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define(
    "Actor", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      birth: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      face: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      movie: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      video: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: "Actors",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );

  return Actor;
};
module.exports = (sequelize, DataTypes) => {
    const PrimaryUser = sequelize.define('primaryuser', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty."
          }
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please provide a valid contact Number"
          }
        }
      },
      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Please provide valid Reseasion"
          }
        }
      },

      status: {
        type: DataTypes.STRING,
        defaultValue: "Pending",
      }
    });
  
    return PrimaryUser;
  };
  
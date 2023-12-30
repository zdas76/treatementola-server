module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define('employees', {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty."
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name cannot be empty."
          }
        }
      },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: {
                msg: "Name cannot be empty."
              }
            }
          },
          role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isIn: [['admin', 'employee']],
            }
          }
        });
        
      
      
        return Employee;
      
}
// module.exports = (sequelize, DataTypes) => {

//     const auth = sequelize.define('employees', {
//       userName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//           notEmpty: {
//             msg: "Name cannot be empty."
//           }
//         }
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           notEmpty: {
//             msg: "Name cannot be empty."
//           }
//         }
//       },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//               notEmpty: {
//                 msg: "Name cannot be empty."
//               }
//             }
//           },
//           designation: {
//             type:DataTypes.STRING,
//             allowNull: false,
//           },
//           dob: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate :{
//               isDate: true, 
//             }
//           },
//           address: {
//             type: DataTypes.STRING
//           },
//           contact: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           rule: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//               notEmpty: {
//                 msg: "Employee Rule cannot be empty."
//               }
//             }
//           },
//           status:{
//             type: DataTypes.STRING,
//             defaultValue: "Enable",
//             validate: {
//                 isIn: [['Enable', 'Desable']],
//             }
//           }
//         });
      
//         return Employee;
      
// }
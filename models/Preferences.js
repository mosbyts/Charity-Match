
// module.exports = function(sequelize, DataTypes) {
//     var Preference = sequelize.define("Preference", {
//       question1: {
//         type: DataTypes.STRING,
//         allowNull: true
//         // validate: {
//         //   len: [1]
//         // }
//       },
//       question2: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       question3: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       question4: {
//         type: DataTypes.STRING,
//         allowNull: true
//       },
//       question5: {
//         type: DataTypes.STRING,
//         allowNull: true
//       }
//     });
  
//     Preference.associate = function(models) {
//       // We're saying that a Post should belong to an Author
//       // A Post can't be created without an Author due to the foreign key constraint
//       Preference.belongsTo(models.User, {
//         foreignKey: {
//           allowNull: true
//         }
//       });
//     };
  
//     return Preference;
//   };
  
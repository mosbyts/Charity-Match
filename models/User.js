// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: true
//       // validate: {
//       //   len: [1]
//       // }
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // validate: {
//       //   len: [1]
//       // }
//     },
//     userName: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // validate: {
//       //   len: [1]
//       // }
//     },
//     userPassword: {
//       type: DataTypes.STRING,
//       allowNull: false
//       // validate: {
//       //   len: [1]
//       // }
//     },
//     preferenceId: {
//       type: DataTypes.INTEGER,
//       allowNull: true
//       // validate: {
//       //   len: [1]
//       // }
//     },
//   });

//   User.associate = function(models) {
//     // Associating Author with Posts
//     // When an Author is deleted, also delete any associated Posts
//     User.hasMany(models.Preferences, {
//       onDelete: "cascade"
//     });
//   };

//   return User;
// };

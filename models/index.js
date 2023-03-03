const User = require("./User");
const Task = require("./Task");
const Profile = require("./Profile");

/*
 * One(User) - To - Many(Task)
 */
User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
});

/*
 * One(User) - To - One(Profile)
 */
User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = { User, Task, Profile };

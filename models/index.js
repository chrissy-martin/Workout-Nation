const User = require("./User");
const Task = require("./Task");

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

module.exports = { User, Task };

const { Task } = require("../models");

const tasksData = [
  {
    taskname: "Tabata training",
    intensify: 2,
    user_id: 1,
  },
  {
    taskname: "dancing",
    intensify: 1,
    user_id: 1,
  },
  {
    taskname: "Light jogging",
    intensify: 0,
    user_id: 2,
  },
];

const seedTask = () => Task.bulkCreate(tasksData);

module.exports = seedTask;

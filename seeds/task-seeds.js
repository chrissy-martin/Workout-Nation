const { Task } = require("../models");

const tasksData = [
  {
    taskname: "Tabata training",
    intensify: 2,
    duration_minute: 60,
    user_id: 1,
  },
  {
    taskname: "dancing",
    intensify: 1,
    duration_minute: 30.5,
    user_id: 1,
  },
  {
    taskname: "Light jogging",
    intensify: 0,
    duration_minute: 73.5,
    user_id: 2,
  },
];

const seedTask = () => Task.bulkCreate(tasksData);

module.exports = seedTask;

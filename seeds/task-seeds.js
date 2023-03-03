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
    taskname: "Slowly lifting weights",
    intensify: 0,
    duration_minute: 25,
    user_id: 1,
  },
  {
    taskname: "Light jogging",
    intensify: 0,
    duration_minute: 55.5,
    user_id: 2,
  },
  {
    taskname: "Playing doubles tennis",
    intensify: 1,
    duration_minute: 45.5,
    user_id: 2,
  },
  {
    taskname: "Jump roping",
    intensify: 2,
    duration_minute: 5,
    user_id: 2,
  },
];

const seedTask = () => Task.bulkCreate(tasksData);

module.exports = seedTask;

const { User } = require("../models");

const userData = [
  {
    username: "John",
    email: "john@hotmail.com",
    password: "test1234",
  },
  {
    username: "Doe",
    email: "doe@yahoo.com",
    password: "test1234",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;

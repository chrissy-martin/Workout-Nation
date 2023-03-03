const { Profile } = require("../models");

const profileData = [
  {
    age: 25,
    weight: 152,
    height: 5.74,
    user_id: 1,
  },
  {
    age: 30,
    weight: 220.5,
    height: 6.23,
    user_id: 2,
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;

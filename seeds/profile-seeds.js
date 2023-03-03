const { Profile } = require("../models");

const profileData = [
  {
    age: 25,
    weight: 152,
    height: 5.74,
    user_id: 1,
    image_secure_url:
      "https://res.cloudinary.com/dyd46csac/image/upload/v1677824146/sawivuacj0svtqrrtyms.jpg",
  },
  {
    age: 30,
    weight: 220.5,
    height: 6.23,
    user_id: 2,
    image_secure_url:
      "https://res.cloudinary.com/dyd46csac/image/upload/v1677828466/v2hputtmf5zdey1dbyyo.jpg",
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;

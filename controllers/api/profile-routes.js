const router = require("express").Router();
const { Profile, User } = require("../../models");
const withAuth = require("../../utils/authenticator");

/*
 * POST [api/profile]
 * Creating user profile
 * Authenticated user only
 */
router.post("/", withAuth, async (req, res) => {
  try {
    const profilekData = await Profile.create({
      age: req.body.age,
      weight: req.body.weight,
      hight: req.body.hight,
      user_id: req.session.user_id,
    });

    res.status(200).json(profilekData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

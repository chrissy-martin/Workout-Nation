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
      height: req.body.height,
      image_secure_url: req.body.image_secureUrl,
      // image_public_id: req.body.image_public_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(profilekData);
  } catch (err) {
    res.status(400).json(err);
  }
});

/*
 * PUT [api/profile]
 * Updating user profile
 * Authenticated user only
 */
router.put("/", withAuth, async (req, res) => {
  try {
    const profilekData = await Profile.update(
      {
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        image_secure_url: req.body.image_secureUrl,
      },
      {
        where: {
          user_id: req.session.user_id,
        },
      }
    );

    res.status(200).json(profilekData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

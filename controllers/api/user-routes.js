const router = require("express").Router();
// const { User } = require("../../models");

router.get("/", async (req, res) => {
  res.json({ message: "This is api/user" });
});

module.exports = router;
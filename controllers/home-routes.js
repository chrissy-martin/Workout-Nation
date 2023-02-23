const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json({ message: "This is homepage route" });
});

module.exports = router;

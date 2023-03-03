const router = require("express").Router();
const userRoutes = require("./user-routes");
const taskRoutes = require("./task-routes");
const profileRoutes = require("./profile-routes");

router.use("/user", userRoutes);
router.use("/task", taskRoutes);
router.use("/profile", profileRoutes);

module.exports = router;

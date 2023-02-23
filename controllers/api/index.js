const router = require("express").Router();
const userRoutes = require("./user-routes");
// const workoutRoutes = require("./workout-routes");

router.use("/user", userRoutes);
// router.use("/workout", workoutRoutes);

module.exports = router;

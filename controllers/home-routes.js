const router = require("express").Router();
const { User, Task } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", async (req, res) => {
  try {
    const taskData = await Task.findAll({
      include: [{ model: User }],
      order: [["date_created", "DESC"]],
    });

    const tasks = taskData
      .map((task) => task.get({ plain: true }))
      .map((taskObj) => {
        const intensifyMap = {
          0: "low",
          1: "moderate",
          2: "high",
        };
        return {
          ...taskObj,
          intensify: intensifyMap[taskObj.intensify],
        };
      });

    res.render("dashboard", {
      tasks,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;

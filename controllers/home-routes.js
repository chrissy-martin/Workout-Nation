const router = require("express").Router();
const { User, Task } = require("../models");

router.get("/", async (req, res) => {
  res.render("homepage");
});

/* @ To Do
 * change route name & change handlebars name...
 */
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

    // res.json(tasks);

    res.render("dashboard", {
      tasks,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

/* @ To Do
 * change route name & change handlebars name...
 */
router.get("/create-task-form", async (req, res) => {
  try {
    res.render("create-task-form");
  } catch (error) {
    res.status(500).json(err);
  }
});

/* @ To Do
 * change route name & change handlebars name...
 */
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

/* @ To Do
 * change route name & change handlebars name...
 */
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;

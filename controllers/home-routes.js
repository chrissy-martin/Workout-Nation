const router = require("express").Router();
const { User, Task, Profile } = require("../models");
const withAuth = require("../utils/authenticator");

/*
 * Get [/]
 * render homepage.handlebars
 */
router.get("/", async (req, res) => {
  res.render("homepage", {
    isLoggedIn: req.session.logged_in,
  });
});

/*
 * Get [/dashboard]
 * render dashboard.handlebars
 */
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const taskData = await Task.findAll({
      include: [{ model: User }],
      where: { user_id: req.session.user_id },
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

    const userData = await User.findByPk(req.session.user_id);
    const user = await userData.get({ plain: true });

    res.render("dashboard", {
      tasks,
      user,
      isLoggedIn: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

/*
 * Get [/create-task-form]
 * render create-task-form.handlebars
 */
router.get("/create-task-form", withAuth, async (req, res) => {
  try {
    res.render("create-task-form", {
      isLoggedIn: true,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

/*
 * Get [/login]
 * render login.handlebars
 */
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

/*
 * Get [/signup]
 * render signup.handlebars
 */
router.get("/signup", (req, res) => {
  res.render("signup");
});

/*
 * Get [/profile/form]
 * render profile-form.handlebars
 */
router.get("/profile/form", (req, res) => {
  res.render("profile-form", {
    isLoggedIn: req.session.logged_in,
  });
});

/*
 * Get [/profile/display]
 * render profile-display.handlebars
 */
router.get("/profile/display", withAuth, async (req, res) => {
  try {
    const profileData = await Profile.findOne({
      include: [{ model: User }],
      where: { user_id: req.session.user_id },
    });
    const profile = profileData.get({ plain: true });
    console.log(profile);
    res.render("profile-display", {
      profile,
      isLoggedIn: req.session.logged_in,
    });
  } catch (error) {
    // res.status(500).json({ message: "error happened" });
    res.status(500).redirect("/profile/form");
  }
});

/*
 * Get [/testing]
 * render testing.handlebars
 */
router.get("/testing", async (req, res) => {
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

    const userData = await User.findAll();
    const users = userData.map((user) => user.get({ plain: true }));
    // res.json(userData);
    res.render("testing", {
      tasks,
      users,
      isLoggedIn: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

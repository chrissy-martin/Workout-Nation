const router = require("express").Router();
const { User, Task } = require("../../models");
const withAuth = require("../../utils/authenticator");

router.post("/", withAuth, async (req, res) => {
  try {
    const taskData = await Task.create({
      taskname: req.body.taskName,
      intensify: req.body.intensifyVal,
      user_id: req.session.user_id,
    });

    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

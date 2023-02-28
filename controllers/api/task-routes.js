const router = require("express").Router();
const { User, Task } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const taskData = await Task.create({
      taskname: req.body.taskName,
      intensify: req.body.intensifyVal,
      /* @ To Do
       * user_id from session...
       */
      //   user_id: req.session.user_id,
    });

    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

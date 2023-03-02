const router = require("express").Router();
const { User, Task } = require("../../models");
const withAuth = require("../../utils/authenticator");

/*
 * POST [api/task]
 * Creating workout task
 * Authenticated user only
 */
router.post("/", withAuth, async (req, res) => {
  try {
    const taskData = await Task.create({
      taskname: req.body.taskName,
      intensify: req.body.intensifyVal,
      duration_minute: req.body.duration_minute,
      user_id: req.session.user_id,
    });

    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

/*
 * DELETE [api/task/:id]
 * Delete workout task
 * Authenticated user only
 */
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const taskData = await Task.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!taskData) {
      res.status(404).json({ message: "No task found with this id!" });
      return;
    }
    res.status(200).json(taskData);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*
 * PUT [api/task/setToFinish/:id]
 * Update task to finished
 */
router.put("/setToFinish/:id", withAuth, async (req, res) => {
  try {
    const task = await Task.update(
      {
        isFinished: true,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (task[0] === 0) {
      res.status(404).json({ message: "error happened!" });
      return;
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*
 * PUT [api/task/setToUnfinish/:id]
 * Update task to un-finished
 */
router.put("/setToUnfinish/:id", withAuth, async (req, res) => {
  try {
    const task = await Task.update(
      {
        isFinished: false,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (task[0] === 0) {
      res.status(404).json({ message: "error happened!" });
      return;
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

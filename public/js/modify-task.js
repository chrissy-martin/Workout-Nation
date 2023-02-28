// const { Task } = require("../../models");
// import { Task } from "../../models";

const handleSetFinish = async (evt) => {
  evt.preventDefault();

  //   setFinishBtn = document.querySelector("#setFinish");
  //   const taskId = setFinishBtn.parentElement.dataset.taskid;
  //   const task = Task.findByPk(taskId);
  //   task.isFinished = true;

  //   const taskId = document.querySelector(".setFinish").parentElement.dataset.taskid;
  const taskId = evt.target.parentElement.dataset.taskid;
  // Send a PUT request to the API endpoint
  const response = await fetch(`/api/task/setToFinish/${taskId}`, {
    method: "PUT",
    // body: JSON.stringify({ isFinished: true }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert("Error");
  }
};

const handleUndo = async (evt) => {
  evt.preventDefault();
  //   const taskId = document.querySelector("#undo").parentElement.dataset.taskid;
  //   const taskId = document.querySelector(".aTask").dataset.taskid;
  const taskId = evt.target.parentElement.dataset.taskid;
  const response = await fetch(`/api/task/setToUnfinish/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert("Error");
  }
};

const handleDelete = async (evt) => {
  evt.preventDefault();
  //   const id = document.querySelector(".aTask").dataset.taskid;
  //   console.log(evt.target.parentElement.dataset.taskid);
  const id = evt.target.parentElement.dataset.taskid;
  if (id) {
    const response = await fetch(`/api/task/${id}`, {
      method: "DELETE",
    });

    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

// document.querySelector(".setFinish").addEventListener("click", handleSetFinish);
// document.querySelector(".undo").addEventListener("click", handleUndo);
// document.querySelector(".deleteTask").addEventListener("click", handleDelete);

// Get all elements with the "setFinish" class
const setFinishBtn = document.querySelectorAll(".setFinish");
// Loop through each element and attach the event listener
setFinishBtn.forEach((element) => {
  element.addEventListener("click", handleSetFinish);
});

const setUnfinishBtn = document.querySelectorAll(".undo");
setUnfinishBtn.forEach((element) => {
  element.addEventListener("click", handleUndo);
});

const deleteTaskBtn = document.querySelectorAll(".deleteTask");
deleteTaskBtn.forEach((element) => {
  element.addEventListener("click", handleDelete);
});

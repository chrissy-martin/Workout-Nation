/* @ To Do
 * change alert error message
 */
const handleSetFinish = async (evt) => {
  evt.preventDefault();
  // const taskId = evt.target.parentElement.dataset.taskid;
  const taskId = evt.target.parentElement.parentElement.dataset.taskid;
  const response = await fetch(`/api/task/setToFinish/${taskId}`, {
    method: "PUT",
    // body: JSON.stringify({ isFinished: true }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    // console.log(response);
    alert("You already finished the task");
  }
};
/* @ To Do
 * change alert error message
 */
const handleUndo = async (evt) => {
  evt.preventDefault();
  // const taskId = evt.target.parentElement.dataset.taskid;
  const taskId = evt.target.parentElement.parentElement.dataset.taskid;
  const response = await fetch(`/api/task/setToUnfinish/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert(
      "This task has not been finished / You don't have permission to toggle this"
    );
  }
};

const handleDelete = async (evt) => {
  evt.preventDefault();
  //   console.log(evt.target.parentElement.dataset.taskid);
  // const id = evt.target.parentElement.dataset.taskid;
  const taskId = evt.target.parentElement.parentElement.dataset.taskid;
  if (taskId) {
    const response = await fetch(`/api/task/${taskId}`, {
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

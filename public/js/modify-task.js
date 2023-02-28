const handleSetFinish = () => {
  alert("it works");
};

const handleDelete = async () => {
  const id = document.querySelector(".aTask").dataset.taskid;
  // const id = sometarget.getAttribute("data-id");
  if (id) {
    const response = await fetch(`/api/task/${id}`, {
      method: "DELETE",
    });

    // alert(id);
    console.log(response);
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

document.querySelector("#setFinish").addEventListener("click", handleSetFinish);
document.querySelector("#deleteTask").addEventListener("click", handleDelete);

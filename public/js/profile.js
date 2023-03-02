handleSubmit = async (evt) => {
  evt.preventDefault();

  const age = document.querySelector("#inputAge").value.trim();
  const weight = document.querySelector("#inputWeight").value.trim();
  const hight = document.querySelector("#inputHight").value.trim();

  if (age && weight && hight) {
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ age, weight, hight }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile-display");
    } else {
      alert("Error");
    }
  }
};

document.querySelector("#submitBtn").addEventListener("click", handleSubmit);

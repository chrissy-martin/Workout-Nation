handleSubmit = async (evt) => {
  evt.preventDefault();

  const username = document.querySelector("#inputUsername").value.trim();
  const email = document.querySelector("#inputEmail1").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      /* @ To Do
       * Redirect to where...
       */
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector("#submitBtn").addEventListener("click", handleSubmit);

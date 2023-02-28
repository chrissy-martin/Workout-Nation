handleSubmit = async (evt) => {
  evt.preventDefault();

  const email = document.querySelector("#inputEmail1").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(
        "Invalid Login Credentials. Please Check Your Username and Password and Try Again."
      );
    }
  }
};

document.querySelector("#submitBtn").addEventListener("click", handleSubmit);

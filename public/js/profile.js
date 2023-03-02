// const api_key = "562492553275237";
// const cloud_name = "dyd46csac";

handleSubmit = async (evt) => {
  evt.preventDefault();

  const age = document.querySelector("#inputAge").value.trim();
  const weight = document.querySelector("#inputWeight").value.trim();
  const height = document.querySelector("#inputHight").value.trim();
  const imageUrl = document.querySelector("#inputImage").value.trim();

  const cloudinaryResponse = await fetch(`/upload/cloud`, {
    method: "POST",
    body: JSON.stringify({ imageUrl }),
    headers: { "Content-Type": "application/json" },
  });

  if (!cloudinaryResponse.ok) {
    throw new Error(`Failed to upload image: ${cloudinaryResponse.status}`);
  }
  const result = await cloudinaryResponse.json();
  // console.log(result);
  // const cloudinaryImagePublicId = result.public_id;
  const cloudinaryImageUrl = result.secure_url;

  if (age && weight && height && cloudinaryImageUrl) {
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({
        age,
        weight,
        height,
        image_secureUrl: cloudinaryImageUrl,
        // image_public_id: cloudinaryImagePublicId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile/display");
    } else {
      alert("Error");
    }
  }
};

handleUpdate = async (evt) => {
  evt.preventDefault();

  const age = document.querySelector("#inputAge").value.trim();
  const weight = document.querySelector("#inputWeight").value.trim();
  const height = document.querySelector("#inputHight").value.trim();
  const imageUrl = document.querySelector("#inputImage").value.trim();

  const cloudinaryResponse = await fetch(`/upload/cloud`, {
    method: "POST",
    body: JSON.stringify({ imageUrl }),
    headers: { "Content-Type": "application/json" },
  });

  if (!cloudinaryResponse.ok) {
    throw new Error(`Failed to upload image: ${cloudinaryResponse.status}`);
  }
  const tempResult = await cloudinaryResponse.json();
  const cloudinaryImageUrl = tempResult.secure_url;

  if (age && weight && height && cloudinaryImageUrl) {
    const response = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        age,
        weight,
        height,
        image_secureUrl: cloudinaryImageUrl,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile/display");
    } else {
      alert("Error");
    }
  }
};

document.querySelector("#submitBtn").addEventListener("click", handleSubmit);
document.querySelector("#updateBtn").addEventListener("click", handleUpdate);

// const imageFile = document.querySelector("#file-field").files[0];

// const signatureResponse = await fetch("/get-signature");
// console.log(signatureResponse);
// const data = new FormData();
// data.append("file", imageFile);
// data.append("api_key", api_key);
// data.append("signature", signatureResponse.signature);
// data.append("timestamp", signatureResponse.timestamp);
// const cloudinaryResponse = await fetch(
//   `https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`,
//   {
//     method: "POST",
//     body: data,
//     headers: { "Content-Type": "multipart/form-data" },
//   }
// );
// const photoData = {
//   public_id: cloudinaryResponse.data.public_id,
//   version: cloudinaryResponse.data.version,
//   signature: cloudinaryResponse.data.signature,
// };

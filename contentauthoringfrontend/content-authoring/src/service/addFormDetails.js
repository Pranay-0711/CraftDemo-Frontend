export function addFormDetails(endpoint, formField, navigate) {
  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formField),
  }).then((res) => {
    if(res.ok){
      console.log("Form Details Added");
      navigate("/");
    }
    else return new Error("Unable to add details.");
  });
}

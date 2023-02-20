export function UpdateFaqList(endpoint, request, navigate) {
  fetch(endpoint, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  }).then((res) => {
    if(res.ok){
      console.log("FAQ Updated");
      navigate("/");
    }
    else return new Error("Error Occured while updating");
  });
}

import { BASE_URL } from "../Constant";

export function genericFormBuilder(type, userId, setList) {
  fetch(`${BASE_URL}${type}/${userId}/get`)
    .then((res) => {
      if(res.ok)
       return res.json();
      else return new Error("Unable to get the result");
    })
    .then((res) => setList(res));
}

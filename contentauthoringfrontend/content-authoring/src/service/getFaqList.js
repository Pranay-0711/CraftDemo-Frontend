import { BASE_URL } from "../Constant";

export function getFaqList(userId, setList, params, setFormField, formField) {
  fetch(`${BASE_URL}faq/${userId}/get`)
    .then((res) => {
      if(res.ok)
      return res.json()
      else throw new Error("Unable to fetch the faq list")
    })
    .then((res) => {
      setList(res);
      if (params?.id) {
        const { question, answer } = res.filter((l) => l.id == params?.id)[0];
        setFormField({ ...formField, answer, question });
      }
    });
}

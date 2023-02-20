import { BASE_URL } from "../Constant";

export function getArticleList(userId, setList, params, setFormField, formField) {
  fetch(`${BASE_URL}article/${userId}/get`)
    .then((res) => {
      if(res.ok)
      return res.json()
      else throw new Error("Unable to fetch the article list")
    })
    .then((res) => {
      setList(res);
      if (params?.id) {
        const { imageText, imageUrl, paragraph, title, subtitle } = res.filter((l) => l.id == params?.id)[0];
        setFormField({ ...formField, title, subtitle, imageText, imageUrl, paragraph });
      }
    });
}

import * as React from "react";
import { Paper } from "@mui/material";
import FAQ from "./FAQ";

export default function FAQList() {
  const paperStyle = { padding: "10px 20px", width: 600, margin: "20px auto" };
  const loggedInUser = "3817e571-9cb9-4cb5-a5a3-b8937a3be250";
  const [faqList, setFaqList] = React.useState([]);
  React.useEffect(() => {      
    fetch(`http://localhost:8080/faq/${loggedInUser}/get`)
      .then((res) => res.json())
      .then((res) => {setFaqList(res)});
  }, []);

  return (
    <div>
      <Paper elevation={3} style={paperStyle}>
        <h4>FAQ's Added</h4>
        {faqList.map((faq, index) => (
          <FAQ
            key={faq.id}
            id={faq.id}
            userId={faq.userId}
            question={faq.question}
            answer={faq.answer}
          ></FAQ>
        ))}
      </Paper>
    </div>
  );
}

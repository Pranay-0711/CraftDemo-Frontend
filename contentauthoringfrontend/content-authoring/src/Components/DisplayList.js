import * as React from "react";
import { Paper } from "@mui/material";
import HelpArticle from "./HelpArticle";

export default function DisplayList(props) {
  const paperStyle = { padding: "10px 20px", width: 600, margin: "20px auto" };
  const loggedInUser = "3817e571-9cb9-4cb5-a5a3-b8937a3be250";
  const [contentList, setContentList] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:8080/article/${loggedInUser}/get`)
      .then((res) => res.json())
      .then((res) => setContentList(res));
  }, []);

  return (
    <div>
      <Paper elevation={3} style={paperStyle}>
        <h4>Help Articles Added</h4>
        {contentList.map((content, index) => (
          <HelpArticle id={index} content={content}></HelpArticle>
        ))}
      </Paper>
    </div>
  );
}

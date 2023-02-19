import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import schema from "../Schema/FAQSchema.json";

function UpdateFaq() {
  const [list, setList] = useState([]);
  const [userId, setUserId] = useState("3817e571-9cb9-4cb5-a5a3-b8937a3be250");
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const [formField, setFormField] = useState({});
  const [error, setError] = useState([]);
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const navigate = useNavigate();
  const properties = Object.keys(schema.properties);
  const endpoint = `http://localhost:8080/faq/${params.id}/update`;
  useEffect(() => {
    fetch(`http://localhost:8080/faq/${userId}/get`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
        if (params?.id) {
          const { question, answer } = res.filter((l) => l.id == params?.id)[0];
          setFormField({ ...formField, answer, question });
        }
      });
  }, []);

  const handleChange = (event, property) => {
    if (event.target.value === "" && schema?.required?.includes(property))
      error[property] = true;
    else error[property] = false;
    let fields = { ...formField };
    fields[property] = event.target.value;
    setError(error);
    setFormField(fields);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let err = schema.required.some(
      (requiredProperty) => error[requiredProperty] === true
    );
    err |= schema.required.some(
      (requiredProperty) => formField[requiredProperty] === ""
    );
    if (err) {
      alert("Please fill the required details");
      return;
    }
    let request = list.filter((l) => l.id == params.id)[0];
    request.question = formField.question;
    request.answer = formField.answer;
    console.log(endpoint);
    fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    }).then(() => console.log("FAQ Added"));
    navigate("/");
  };
  return (
    <div>
      <Paper elevation={3} style={paperStyle}>
        <h1>Update Faq</h1>
        {properties.map((property, key) => (
          <div>
            <Box
              sx={{
                maxWidth: "100%",
                margin: "32px",
              }}
            >
              <TextField
                fullWidth
                id={formField[property]}
                value={formField[property]}
                error={error[property]}
                onChange={(e) => handleChange(e, property)}
              />
            </Box>
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={handleClick}>
          Update
        </Button>
      </Paper>
    </div>
  );
}

export default UpdateFaq;

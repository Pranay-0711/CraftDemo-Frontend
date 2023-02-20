import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { genericFormBuilder } from "../service/genericFormBuilder";
import { addFormDetails } from "../service/addFormDetails";

export default function FormBuilder({ schema, title, endpoint, type }) {
  const [list, setList] = useState([]);
  const [userId, setUserId] = useState("3817e571-9cb9-4cb5-a5a3-b8937a3be250");
  const [error, setError] = useState({});
  const [formField, setFormField] = useState({});
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const navigate = useNavigate();
  useEffect(() => {
    let errorFields = {};
    let faqArticle = { userId: userId };
    properties.forEach((property) => (faqArticle[property] = ""));
    properties.forEach((property) => (errorFields[property] = false));
    setError(errorFields);
    setFormField(faqArticle);
    genericFormBuilder(type, userId, setList);
  }, []);

  const properties = Object.keys(schema.properties);
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
    addFormDetails(endpoint, formField, navigate);
  };
  return (
    <div>
      <Paper elevation={3} style={paperStyle}>
        <h1>{title}</h1>
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
                label={property}
                id={formField[property]}
                value={formField[property]}
                error={error[property]}
                onChange={(e) => handleChange(e, property)}
              />
            </Box>
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={handleClick}>
          Submit
        </Button>
      </Paper>
    </div>
  );
}



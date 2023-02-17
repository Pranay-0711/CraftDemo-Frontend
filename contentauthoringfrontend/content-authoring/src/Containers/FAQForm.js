import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import faqSchema from '../Schema/FAQSchema.json';

export default function FAQForm() {
    var schema = faqSchema;
    var properties = Object.keys(schema.properties);
    const errorFields={};
    const [userId, setUserId] = useState('3817e571-9cb9-4cb5-a5a3-b8937a3be250')
    var faqArticle={userId:userId}
    properties.forEach(property=> faqArticle[property]='')
    properties.forEach(property=> errorFields[property]=false)
    const [error, setError]=useState(errorFields);
    const [formField, setFormField] = useState(faqArticle);
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }

    const handleChange = (event, property)=>{
        if(event.target.value==="" && schema?.required?.includes(property))error[property]=true;
        else error[property]= false;
        var fields = {...formField};
        fields[property]=event.target.value;
        setError(error);
        setFormField(fields);
    }
    const handleClick = (e) => {
        e.preventDefault();
        var err = schema.required.some(requiredProperty=> error[requiredProperty]=true)
        if(err){
            alert('Please fill the required details')
            return;
        }
        fetch("http://localhost:8080/faq/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formField) }).then(() => console.log("FAQ Added"))
    }
    return (
        <div>
            <Paper elevation={3} style={paperStyle}>
                <h1>FAQ Form</h1>
                {properties.map((property, key) => <div><Box
                    sx={{
                        maxWidth: '100%',
                        margin: '32px'
                    }}
                >
                    <TextField fullWidth label={property} id={formField[property]} value={formField[property]} error={error[property]} onChange={(e) => handleChange(e,property)} />
                </Box></div>)}
                <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
            </Paper>
        </div>

    );
}
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';

export default function FAQForm() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('')
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [userId, setUserId] = useState('3817e571-9cb9-4cb5-a5a3-b8937a3be250')
    const handleClick=(e)=>{
        e.preventDefault();
        const faqArticle={userId, question,answer}
        fetch("http://localhost:8080/faq/add", {method: "POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(faqArticle)}).then(()=>console.log("FAQ Added"))
    }
    return (
        <div>
            <Paper elevation={3} style={paperStyle}>
                <h1>FAQ Form</h1>
            <Box
                sx={{
                    maxWidth: '100%',
                    margin: '32px'
                }}
            >
                <TextField fullWidth label="Question" id="question" value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            </Box>
            <Box
                sx={{
                    maxWidth: '100%',
                    margin: '32px'
                }}
            >
                <TextField fullWidth label="Answer" id="answer" value={answer} onChange={(e)=>setAnswer(e.target.value)}/>
            </Box>
            <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
            </Paper>
        </div>

    );
}
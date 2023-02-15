import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';

export default function HelpArticleForm() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [imageText, setImageText] = useState('')
    const [userId, setUserId] = useState('3817e571-9cb9-4cb5-a5a3-b8937a3be250')
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const handleClick=(e)=>{
        e.preventDefault();
        const helpArticle={userId, title,subtitle,paragraph,imageUrl,imageText}
        fetch("http://localhost:8080/article/add", {method: "POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(helpArticle)}).then(()=>console.log("Article Added"))
    }
    return (
        <div>
            <Paper elevation={3} style={paperStyle}>
                <h1>Help Article Form</h1>
                <Box
                    sx={{
                        maxWidth: '100%',
                        margin: '32px'
                    }}
                >
                    <TextField fullWidth label="Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Box>
                <Box
                    sx={{
                        maxWidth: '100%',
                        margin: '32px'
                    }}
                >
                    <TextField fullWidth label="Subtitle" id="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                </Box>
                <Box
                    sx={{
                        maxWidth: '100%',
                        margin: '32px'
                    }}
                >
                    <TextField fullWidth label="Paragraph" id="paragraph" value={paragraph} onChange={(e) => setParagraph(e.target.value)} />
                </Box>
                <Box
                    sx={{
                        maxWidth: '100%',
                        margin: '32px'
                    }}
                >
                    <TextField fullWidth label="Image Url" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </Box>
                {/* <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button> */}

                <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
            </Paper>
        </div>

    );
}

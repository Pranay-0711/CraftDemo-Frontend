import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';

function FAQ(props) {
    return (
        <div>
            <Box
                sx={{
                    maxWidth: '100%',
                    margin: '32px'
                }}
            >
                <Card sx={{ maxWidth: '100%' }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={props.question}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {props.answer}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default FAQ
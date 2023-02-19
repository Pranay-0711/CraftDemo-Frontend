import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardHeader } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HelpArticle({ content: { title, subtitle, paragraph } }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <Box
        onClick={() => setShowMore(!showMore)}
        sx={{
          maxWidth: "100%",
          margin: "32px",
        }}
      >
        <Card sx={{ maxWidth: "100%", cursor: "pointer" }}>
          <CardHeader
            sx={{ padding: "0px" }}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
          />
          <CardContent style={{ padding: 4 }}>
            {showMore && (
              <div>
                <Typography variant="body2" color="text.secondary">
                  {subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {paragraph}
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default HelpArticle;

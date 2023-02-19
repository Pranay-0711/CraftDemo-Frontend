import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { CardHeader } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function FAQ(props) {
  const [showMore, setShowMore] = useState(false);
  const [edit, EnableEdit] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Box
        onClick={() => {
          setShowMore(!showMore);
          if (edit) EnableEdit(false);
        }}
        sx={{
          maxWidth: "100%",
          margin: "32px",
        }}
      >
        <Card sx={{ maxWidth: "100%", paddingTop: 2, cursor: "pointer" }}>
          <CardHeader
            sx={{ padding: 0 }}
            action={
              <IconButton aria-label="settings">
                {!edit && (
                  <MoreVertIcon
                    onClick={() => {
                      EnableEdit(!edit);
                      showMore(false);
                    }}
                  ></MoreVertIcon>
                )}
                {edit && (
                  <div>
                    <Paper sx={{ width: 120, maxWidth: "100%" }}>
                      <MenuList
                        onClick={() => {
                          EnableEdit(!edit);
                        }}
                      >
                        <MenuItem>
                          <ListItemText
                            onClick={() =>
                              navigate(`/faq/update?id=${props.id}`)
                            }
                          >
                            Edit
                          </ListItemText>
                        </MenuItem>
                        <MenuItem>
                          <ListItemText>Delete</ListItemText>
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </div>
                )}
              </IconButton>
            }
            title={props.question}
          />
          <CardContent style={{ padding: 4 }}>
            {showMore && (
              <Typography variant="body2" color="text.secondary">
                {props.answer}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default FAQ;

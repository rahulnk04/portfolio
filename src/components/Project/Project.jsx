import React from "react";
// import "./Project.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const Project = ({ desc }) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => {
          alert("Comming Soon");
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={desc["img"]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:19}} >
            {desc["name"]}
          </Typography>
          <Box sx={{minHeight:"160px"}}>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:13}}>
              {desc["description"]}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;

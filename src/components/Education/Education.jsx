import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Slick from "../Slick/Slick";

const Education = ({ desc }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Card>
        <CardActionArea
          onClick={() => {
            handleClickOpen();
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={desc["img"]}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{fontSize:17}}>
              {desc["degree"]}
            </Typography>
            <Typography color="text.secondary" sx={{fontSize:15}}>{desc["name"]}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {desc["location"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc["description"]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"lg"}
      >
        <DialogTitle id="alert-dialog-title">{desc["name"]}</DialogTitle>
        <Slick imgs={desc["imgs"]}/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {desc["description"]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Education;

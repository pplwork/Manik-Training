import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
function AddApartmentModal(props) {
  const { open, handleClose } = props;
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [GeoCord, setGeoCord] = useState("");
  const [floorSize, setFloorSize] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [rooms, setRooms] = React.useState("");
  const [ammount, setAmmount] = React.useState("");
  const handleChange = (event) => {
    setRooms(event.target.value);
  };

  const handleUploadClick = (e) => {
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "ofy9z5sj");
    console.log("filesssssss ", e.target.files[0]);
    fetch("https://api.cloudinary.com/v1_1/dmimdxlso/image/upload", {
      method: "POST",
      body: formdata,
    })
      .then((data) => data.json())
      .then((data) => {
        document.querySelector(".AppImage").src = data.secure_url;
        setImageLink(data.secure_url);
      });
  };
  const handleSubmit = () => {
    console.log(
      name,
      Description,
      floorSize,
      ammount,
      imageLink,
      GeoCord,
      rooms
    );
    setAmmount("");
    setFloorSize("");
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className="dialog"
    >
      <DialogTitle id="form-dialog-title" className="dialog__title">
        Add Apartment
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Description"
          label="Description"
          type="text"
          fullWidth
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="geoCord"
          label="Geo Coordinates"
          type="text"
          fullWidth
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setGeoCord(e.target.value);
          }}
        />
        <div className="helper">
          <div className="helper__div">
            <InputLabel
              id="demo-simple-select-label"
              style={{ fontSize: "1.5rem" }}
            >
              Rooms
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rooms}
              onChange={handleChange}
              style={{ fontSize: "1.5rem", width: "20rem" }}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
            </Select>
          </div>
          <div className="helper__div">
            <InputLabel
              htmlFor="standard-adornment-size"
              style={{ fontSize: "1.5rem" }}
            >
              Floor Size
            </InputLabel>
            <Input
              className="standard-adornment-size"
              value={floorSize}
              style={{ fontSize: "1.5rem", width: "20rem" }}
              type="number"
              startAdornment={
                <InputAdornment position="start">Sq.ft.</InputAdornment>
              }
              onChange={(e) => {
                setFloorSize(e.target.value);
              }}
            />
          </div>
        </div>
        <InputLabel
          htmlFor="standard-adornment-amount"
          style={{ fontSize: "1.5rem" }}
        >
          Amount
        </InputLabel>
        <Input
          className="standard-adornment-amount"
          value={ammount}
          onChange={(e) => {
            setAmmount(e.target.value);
          }}
          style={{ fontSize: "1.5rem", width: "20rem" }}
          type="number"
          startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
        />
        <div>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            <div
              style={{
                display: "inline-block",
                marginRight: "1rem",
                marginTop: "3rem",
              }}
            >
              Add Photo:{" "}
            </div>
            <Fab component="span">
              <AddPhotoAlternateIcon />
            </Fab>
          </label>
        </div>
        <img src="" alt="" className="AppImage" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddApartmentModal;

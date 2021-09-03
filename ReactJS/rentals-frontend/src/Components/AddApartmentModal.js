import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  addApartment,
  changeApartment,
  createApartment,
} from "../actions/apartments";
function AddApartmentModal(props) {
  const { open, handleClose, app } = props;
  const [name, setName] = useState(app ? app.name : "");
  const [description, setDescription] = useState(app ? app.description : "");
  const [geoCord, setgeoCord] = useState(app ? app.geoCord : "");
  const [floorsize, setfloorsize] = useState(app ? app.floorSize : "");
  const [photoLink, setphotoLink] = useState(app ? app.photoLink : "");
  const [Rooms, setRooms] = React.useState(app ? app.Rooms : "");
  const [ammount, setAmmount] = React.useState(app ? app.price : "");
  let [isRentable, setIsRentable] = useState(app ? `${app.isRentable}` : "");
  const handleChange = (event) => {
    setRooms(event.target.value);
  };
  const handleChangeRentable = (event) => {
    setIsRentable(event.target.value);
  };
  const dispatch = useDispatch();
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
        setphotoLink(data.secure_url);
      });
  };
  const handleSubmit = () => {
    console.log(
      name,
      description,
      floorsize,
      ammount,
      photoLink,
      geoCord,
      Rooms,
      isRentable
    );
    let floorSize = parseInt(floorsize);
    let price = parseInt(ammount);
    if (isRentable == "true") {
      isRentable = true;
    } else {
      isRentable = false;
    }
    if (app) {
      dispatch(
        changeApartment(
          {
            name,
            description,
            floorSize,
            price,
            photoLink,
            geoCord,
            Rooms,
            isRentable,
          },
          app.id
        )
      );
    }
    // dispatch(
    //   createApartment({
    //     name,
    //     description,
    //     floorSize,
    //     price,
    //     photoLink,
    //     geoCord,
    //     Rooms,
    //   })
    // );
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
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          defaultValue={app ? app.name : ""}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          margin="dense"
          id="description"
          label="description"
          type="text"
          fullWidth
          defaultValue={app ? app.description : ""}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          margin="dense"
          id="geoCord"
          label="Geo Coordinates"
          type="text"
          fullWidth
          defaultValue={app ? app.geoCord : ""}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setgeoCord(e.target.value);
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
              value={Rooms}
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
              value={floorsize}
              style={{ fontSize: "1.5rem", width: "20rem" }}
              type="number"
              startAdornment={
                <InputAdornment position="start">Sq.ft.</InputAdornment>
              }
              onChange={(e) => {
                setfloorsize(e.target.value);
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
        <FormControl style={{ display: "block" }} component="fieldset">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <FormLabel
              component="legend"
              style={{ fontSize: "1.5rem", marginRight: "1rem" }}
            >
              Is Rentable ? :
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={isRentable}
              onChange={handleChangeRentable}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="False"
                />
              </div>
            </RadioGroup>
          </div>
        </FormControl>
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
        <img src={app ? app.photoLink : ""} alt="" className="AppImage" />
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

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
import { changeApartment, createApartment } from "../actions/apartments";

function AddApartmentModal(props) {
  const { open, setOpen, app } = props;
  const [name, setName] = useState(
    app ? { value: app.name, error: null } : { value: "", error: null }
  );
  const [description, setDescription] = useState(
    app ? { value: app.description, error: null } : { value: "", error: null }
  );
  const [Address, setAddress] = useState(
    app ? { value: app.Address, error: null } : { value: "", error: null }
  );
  const [photoLink, setphotoLink] = useState(
    app ? { value: app.photoLink, error: null } : { value: "", error: null }
  );
  const [floorsize, setfloorsize] = useState(
    app ? { value: app.floorSize, error: null } : { value: "", error: null }
  );
  const [Rooms, setRooms] = React.useState(
    app ? { value: app.Rooms, error: null } : { value: "", error: null }
  );
  const [ammount, setAmmount] = React.useState(
    app ? { value: app.price, error: null } : { value: "", error: null }
  );
  const [updated, setUpdated] = useState(false);
  const dispatch = useDispatch();
  let [isRentable, setIsRentable] = useState(app ? `${app.isRentable}` : "");
  const handleChange = (e) => {
    setRooms({ value: e.target.value, error: null });
  };
  const handleChangeRentable = (event) => {
    setIsRentable(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    if (!app) {
      setName({ value: "", error: null });
      setDescription({ value: "", error: null });
      setphotoLink({ value: "", error: null });
      setRooms({ value: "", error: null });
      setfloorsize({ value: "", error: null });
      setAmmount({ value: "", error: null });
      setAddress({ value: "", error: null });
      setUpdated(false);
    }
  };

  const handleUploadClick = (e) => {
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "ofy9z5sj");
    if (e.target.files[0].size > 1048576) {
      setphotoLink({ value: "", error: "Max Size: 1 MB" });
    } else {
      setUpdated(true);
      fetch("https://api.cloudinary.com/v1_1/dmimdxlso/image/upload", {
        method: "POST",
        body: formdata,
      })
        .then((data) => data.json())
        .then((data) => {
          document.querySelector(".AppImage").src = data.secure_url;
          setphotoLink({ value: data.secure_url, error: null });
        });
    }
  };
  const handleSubmit = () => {
    let floorSize = parseInt(floorsize.value);
    let price = parseInt(ammount.value);

    let send = true;
    if (isRentable === "true") {
      isRentable = true;
    } else {
      isRentable = false;
    }
    if (!name.value) {
      setName({ value: "", error: "Please Enter Name" });
      send = false;
    }
    if (!description.value) {
      setDescription({ value: "", error: "Please Enter Description" });
      send = false;
    }
    if (!Address.value) {
      setAddress({ value: "", error: "Please Enter Address" });
      send = false;
    }
    if (!Rooms.value) {
      setRooms({ value: "", error: "Please Enter Rooms" });
      send = false;
    }
    if (!floorSize) {
      setfloorsize({ value: "", error: "Please Enter floor size" });
      send = false;
    }
    if (!price) {
      setAmmount({ value: "", error: "Please Enter Price" });
      send = false;
    }
    if (!photoLink.value && !updated) {
      setphotoLink({ value: "", error: "Please Add photo" });
    }
    if (!photoLink.value && updated) {
      setphotoLink({
        value: "",
        error: "Please Wait for photo to get Uploaded!",
      });
    }
    if (send === false) {
      return;
    } else if (app) {
      dispatch(
        changeApartment(
          {
            name: name.value,
            description: description.value,
            floorSize,
            price,
            photoLink: photoLink.value,
            Address: Address.value,
            Rooms: Rooms.value,
            isRentable,
          },
          app.id,
          handleClose
        )
      );
    } else {
      dispatch(
        createApartment(
          {
            name: name.value,
            description: description.value,
            floorSize,
            price,
            photoLink: photoLink.value,
            Address: Address.value,
            Rooms: Rooms.value,
          },
          handleClose
        )
      );
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className="dialog"
    >
      {app ? (
        <DialogTitle
          id="form-dialog-title"
          style={{ marginTop: "2rem" }}
          className="dialog__title"
        >
          Edit Apartment
        </DialogTitle>
      ) : (
        <DialogTitle
          id="form-dialog-title"
          className="dialog__title"
          style={{ marginTop: photoLink.value ? "2rem" : "0" }}
        >
          Add Apartment
        </DialogTitle>
      )}

      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          required
          fullWidth
          {...(name.error
            ? { error: true, helperText: name.error }
            : { error: false, helperText: "" })}
          defaultValue={app ? app.name : ""}
          FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            if (/^[\da-zA-Z\s-]+$/.test(e.target.value)) {
              setName({ value: e.target.value.trim(), error: null });
            } else if (e.target.value === "") {
              setName({
                value: e.target.value.trim(),
                error: "Please Enter Name",
              });
            } else {
              setName({
                value: e.target.value.trim(),
                error: "Please Enter a valid Name",
              });
            }
          }}
        />
        <TextField
          margin="dense"
          id="description"
          label="description"
          type="text"
          fullWidth
          required
          {...(description.error
            ? { error: true, helperText: description.error }
            : { error: false, helperText: "" })}
          defaultValue={app ? app.description : ""}
          FormHelperTextProps={{
            style: {
              fontSize: "1rem",
              width: "15rem",
            },
          }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setDescription({
                value: e.target.value.trim(),
                error: "Please Enter Description",
              });
            } else if (e.target.value.split(" ").length < 20) {
              setDescription({
                value: e.target.value.trim(),
                error: "Description should be greater than 20 words",
              });
            } else {
              setDescription({ value: e.target.value.trim(), error: null });
            }
          }}
        />
        <TextField
          margin="dense"
          id="geoCord"
          label="Address"
          type="text"
          fullWidth
          required
          {...(Address.error
            ? { error: true, helperText: Address.error }
            : { error: false, helperText: "" })}
          FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          defaultValue={app ? app.Address : ""}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            if (/^[\da-zA-Z\s.(),-]+$/.test(e.target.value.trim())) {
              setAddress({ value: e.target.value.trim(), error: null });
            } else {
              setAddress({
                value: e.target.value.trim(),
                error: "Please Enter Address",
              });
            }
          }}
        />
        <div className="helper">
          <div className="helper__div">
            <InputLabel
              id="demo-simple-select-label"
              style={{ fontSize: "1.5rem" }}
              required
              {...(Rooms.error ? { error: true } : { error: false })}
            >
              Rooms
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Rooms.value}
              required
              {...(Rooms.error ? { error: true } : { error: false })}
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
              required
              {...(floorsize.error ? { error: true } : { error: false })}
            >
              Floor Size
            </InputLabel>
            <Input
              className="standard-adornment-size"
              value={floorsize.value}
              {...(floorsize.error ? { error: true } : { error: false })}
              style={{ fontSize: "1.5rem", width: "20rem" }}
              type="number"
              startAdornment={
                <InputAdornment position="start">Sq.ft.</InputAdornment>
              }
              onChange={(e) => {
                if (e.target.value > 4000) {
                  setfloorsize({
                    value: e.target.value,
                    error: "Max Size : 4000 Sq.ft",
                  });
                } else if (e.target.value === 0) {
                  setfloorsize({
                    value: e.target.value,
                    error: "Value can't be 0",
                  });
                } else if (!e.target.value) {
                  setfloorsize({
                    value: e.target.value,
                    error: "Enter Floor Size",
                  });
                } else {
                  setfloorsize({ value: e.target.value, error: null });
                }
              }}
            />
            {floorsize.error ? (
              <div
                style={{ color: "red", fontSize: "1rem", paddingTop: "0.3rem" }}
              >
                {floorsize.error}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <InputLabel
          htmlFor="standard-adornment-amount"
          style={{ fontSize: "1.5rem" }}
          required
          {...(ammount.error ? { error: true } : { error: false })}
        >
          Amount
        </InputLabel>
        <Input
          className="standard-adornment-amount"
          value={ammount.value}
          {...(ammount.error ? { error: true } : { error: false })}
          onChange={(e) => {
            if (!e.target.value) {
              setAmmount({
                value: e.target.value,
                error: "Please Enter Price",
              });
            } else if (e.target.value > 100000) {
              setAmmount({
                value: e.target.value,
                error: "Max Price : Rs. 100000",
              });
            } else {
              setAmmount({ value: e.target.value, error: null });
            }
          }}
          style={{ fontSize: "1.5rem", width: "20rem" }}
          type="number"
          startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
        />

        {ammount.error ? (
          <div style={{ color: "red", marginTop: "0.3rem" }}>
            {ammount.error}
          </div>
        ) : (
          ""
        )}
        {app ? (
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
        ) : null}

        <div>
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleUploadClick}
            style={{ display: "none" }}
            required
          />
          <label htmlFor="contained-button-file">
            <div
              style={{
                display: "inline-block",
                marginRight: "1rem",
                marginTop: "3rem",
                fontSize: "1.2rem",
                color: photoLink.error ? "red" : "inherit",
              }}
            >
              Add Photo:{" "}
            </div>
            <Fab component="span">
              <AddPhotoAlternateIcon />
            </Fab>
          </label>
          {photoLink.error ? (
            <div
              style={{
                color: "red",
                fontSize: "1rem",
              }}
            >
              {photoLink.error}
            </div>
          ) : null}
        </div>
        <img src={app ? app.photoLink : ""} alt="" className="AppImage" />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setName({ value: "", error: null });
            setDescription({ value: "", error: null });
            setAmmount({ value: "", error: null });
            setRooms({ value: "", error: null });
            setfloorsize({ value: "", error: null });
            setphotoLink({ value: "", error: null });
            setAddress({ value: "", error: null });
            handleClose();
          }}
          color="primary"
        >
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

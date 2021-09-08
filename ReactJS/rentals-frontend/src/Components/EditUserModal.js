import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import user from "../assets/user2.png";
import "./EditUserModal.scss";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
function AddApartmentModal(props) {
  const { open, handleClose } = props;
  const [name, setName] = useState({ value: props.user.name, error: null });
  const [email, setEmail] = useState({ value: props.user.email, error: null });
  const [role, setRole] = useState({ value: props.user.role, error: null });
  //   const dispatch = useDispatch();
  const handleSubmit = () => {
    const url = APIUrls.updateUser(props.user.id);
    console.log(name, email, role);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        role: role.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.status) {
          props.setUser(data);
          handleClose();
        }
      });
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className="dialog"
    >
      <DialogTitle id="form-dialog-title" className="dialog__title">
        USER
      </DialogTitle>
      <DialogContent>
        <img src={user} alt="" style={{ height: "5rem", width: "5rem" }} />
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          defaultValue={props.user.name}
          {...(name.error
            ? { error: true, helperText: name.error }
            : { error: false, helperText: "" })}
          style={{ paddingLeft: "2rem", width: "85%" }}
          InputLabelProps={{
            style: {
              fontSize: "1.5rem",
              paddingLeft: "2.5rem",
            },
          }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            if (/^[\da-zA-Z\s-]+$/.test(e.target.value)) {
              setName({ value: e.target.value, error: null });
            } else if (e.target.value === "") {
              setName({ value: e.target.value, error: "Please Enter Name" });
            } else {
              setName({
                value: e.target.value,
                error: "Please Enter a valid Name",
              });
            }
          }}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="text"
          fullWidth
          defaultValue={props.user.email}
          {...(email.error
            ? { error: true, helperText: email.error }
            : { error: false, helperText: "" })}
          FormHelperTextProps={{ style: { fontSize: "1rem" } }}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            if (!e.target.value) {
              setEmail({ value: e.target.value, error: "Please Enter Mail" });
            } else if (
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                e.target.value
              )
            ) {
              setEmail({ value: e.target.value, error: null });
            } else {
              setEmail({
                value: e.target.value,
                error: "Please Enter Valid Mail",
              });
            }
          }}
        />
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
            Role :
          </FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={role.value}
            onChange={(e) => {
              setRole({ value: e.target.value, error: null });
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel
                value="realtor"
                control={<Radio />}
                label="Realtor"
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
            </div>
          </RadioGroup>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddApartmentModal;

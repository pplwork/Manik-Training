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
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [role, setRole] = useState(props.user.role);
  //   const dispatch = useDispatch();
  const handleSubmit = () => {
    const url = APIUrls.updateUser(props.user.id);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: JSON.stringify({ name, email, role }),
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
          style={{ paddingLeft: "2rem", width: "85%" }}
          InputLabelProps={{
            style: {
              fontSize: "1.5rem",
              paddingLeft: "2.5rem",
            },
          }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email"
          type="text"
          fullWidth
          defaultValue={props.user.email}
          InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          InputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) => {
            setEmail(e.target.value);
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
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
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

import React, { Component, useState } from "react";
import "./Signup.scss";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { startSignup, signup, clearAuthState } from "../actions/auth";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import { FormControl } from "@material-ui/core";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: "", error: null },
      email: { value: "", error: null },
      password: { value: "", error: null },
      confirmPassword: { value: "", error: null },
      iconVisible: false,
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    let error = null;
    if (field === "name") {
      if (!value) {
        error = "Please Enter Name";
      } else if (!/^[\da-zA-Z\s-]+$/.test(value)) {
        error = "Please Enter Valid Name";
      }
    } else if (field === "email") {
      if (!value) {
        error = "Please Enter Email";
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      ) {
        error = "Please Enter Valid Email";
      }
    } else if (field == "password") {
      if (!value) {
        error = "Please Enter Password";
      } else if (value.length < 6) {
        error = "Password should be greater than 6 letters";
      }
    } else if (field == "confirmPassword") {
      if (!value) {
        error = "Please Enter Confirm Password";
      } else if (value != this.state.password.value) {
        error = "The password you entered does not match!";
      }
    }
    this.setState({
      [field]: { value: value, error: error },
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, confirmPassword } = this.state;
    let send = true;
    if (!email.value) {
      this.setState({
        email: { value: email.value, error: "Please Enter Email" },
      });
      send = false;
    }
    if (!password.value) {
      this.setState({
        password: { value: password.value, error: "Please Enter Password" },
      });
      send = false;
    }
    if (!confirmPassword.value) {
      this.setState({
        confirmPassword: {
          value: confirmPassword.value,
          error: "Please Enter Confirm Password",
        },
      });
      send = false;
    }
    if (!name.value) {
      this.setState({
        name: { value: name.value, error: "Please Enter Name" },
      });
      send = false;
    }
    if (send === true) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(name.value, email.value, password.value));
    }
  };

  render() {
    const { inProgress, error, isLoggedin, isSignedUp } = this.props.auth;
    const { name, email, password, confirmPassword } = this.state;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signup">
        <div className="signup__card">
          <div className="signup__card--left"></div>
          <div className="signup__card--right">
            <div className="signup__heading">sign up</div>
            <form noValidate autoComplete="off">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="standard-error"
                  InputLabelProps={{
                    style: {
                      fontSize: "1.5rem",
                      color: name.error ? "red" : "inherit",
                    },
                  }}
                  inputProps={{ style: { fontSize: "1.5rem" } }}
                  label="Name"
                  {...(name.error
                    ? { error: true, helperText: name.error }
                    : { error: false, helperText: "" })}
                  FormHelperTextProps={{ style: { fontSize: "1rem" } }}
                  className="signup__input"
                  type="text"
                  onChange={(e) => {
                    this.handleInputChange("name", e.target.value);
                  }}
                />
                <TextField
                  id="standard-error"
                  InputLabelProps={{
                    style: {
                      fontSize: "1.5rem",
                      color: email.error ? "red" : "inherit",
                    },
                  }}
                  inputProps={{
                    style: {
                      fontSize: "1.5rem",
                    },
                  }}
                  label="Email"
                  className="signup__input"
                  type="email"
                  {...(email.error
                    ? { error: true, helperText: email.error }
                    : { error: false, helperText: "" })}
                  FormHelperTextProps={{ style: { fontSize: "1rem" } }}
                  onChange={(e) => {
                    this.handleInputChange("email", e.target.value);
                  }}
                />
                <div
                  style={{
                    width: "fit-content",
                    position: "relative",
                  }}
                >
                  <TextField
                    className="standard-error-helper-text signup__input"
                    label="Password"
                    {...(password.error ? { error: true } : { error: false })}
                    FormHelperTextProps={{ style: { fontSize: "1rem" } }}
                    InputLabelProps={{
                      style: {
                        fontSize: "1.5rem",
                        color: password.error ? "red" : "inherit",
                      },
                    }}
                    inputProps={{ style: { fontSize: "1.5rem" } }}
                    type={this.state.iconVisible ? "text" : "password"}
                    onChange={(e) => {
                      this.handleInputChange("password", e.target.value);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={this.state.iconVisible ? faEye : faEyeSlash}
                    style={{
                      fontSize: "12px",
                      position: "absolute",
                      right: "10px",
                      bottom: "20px",
                    }}
                    onClick={() => {
                      if (this.state.iconVisible) {
                        this.setState({ iconVisible: false });
                      } else this.setState({ iconVisible: true });
                    }}
                  />
                </div>
                {password.error ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "1rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {password.error}
                  </div>
                ) : (
                  ""
                )}
                <TextField
                  className="standard-error-helper-text"
                  label="Confirm Password"
                  {...(confirmPassword.error
                    ? { error: true, helperText: confirmPassword.error }
                    : { error: false, helperText: "" })}
                  FormHelperTextProps={{ style: { fontSize: "1rem" } }}
                  style={{ marginLeft: "0", marginBottom: "4rem" }}
                  InputLabelProps={{
                    style: {
                      fontSize: "1.5rem",
                      color: confirmPassword.error ? "red" : "inherit",
                    },
                  }}
                  inputProps={{ style: { fontSize: "1.5rem" } }}
                  type="password"
                  onChange={(e) => {
                    this.handleInputChange("confirmPassword", e.target.value);
                  }}
                />
                <Button
                  variant="outlined"
                  className="signup__btn"
                  style={{
                    width: "15rem",
                    height: "4rem",
                    border: "2px solid #c69963",
                    alignSelf: "center",
                  }}
                  onClick={this.onFormSubmit}
                >
                  Sign up
                </Button>
                <div className="signup__text">
                  Already registered?{" "}
                  <Link to="login" className="signup__link">
                    <b className="signup__text--b">Login Now!</b>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);

// function component before

// function Signup() {
//     const classes = useStyles();
//     const [iconVisible,setIconVisible]=useState(false);

//     return (
//         <div className="signup">
//             <div className="signup__card">
//                 <div className="signup__card--left">
//                 </div>
//                 <div className="signup__card--right">
//                     <div className="signup__heading">sign up</div>
//     <form className={classes.root} noValidate autoComplete="off">
//         <div style={{display: 'flex' ,flexDirection: 'column'}}>
//             <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Name"  style={{marginLeft:'0'}} type="text"/>
//             <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Email"  style={{marginLeft:'0'}} type="email"/>
//             <div style={{width:'fit-content',position:'relative'}}>
//             <TextField
//             id="standard-error-helper-text"
//             label="Password"
//             style={{marginLeft:'0'}}
//             InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
//             type={iconVisible?"text":"password"}
//             />
//             <FontAwesomeIcon icon={iconVisible?faEye:faEyeSlash} style={{fontSize:'12px',position:'absolute',right:'10px',bottom:'20px'}} onClick={()=>setIconVisible(prev=>!prev)}/>
//             </div>
//             <TextField
//             id="standard-error-helper-text"
//             label="Confirm Password"
//             style={{marginLeft:'0' , marginBottom:'4rem'}}
//             InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
//             type={iconVisible?"text":"password"}
//             />
//             <Button variant="outlined" className="signup__btn" style={{width:'15rem', height:'4rem',border:'2px solid #c69963', alignSelf:'center'}}>
//                 Sign up
//             </Button>
//             <div className="signup__text">Already registered? <Link to="login" className="signup__link"><b className="signup__text--b">Login Now!</b></Link></div>
//         </div>
//     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

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
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 270,
    },
  },
}));
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      iconVisible: false,
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = this.state;

    if (email && password && name) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(name, email, password));
    }
  };

  // const classes = useStyles();
  // const [iconVisible,setIconVisible]=useState(false);
  render() {
    const { inProgress, error, isLoggedin, isSignedUp } = this.props.auth;
    if (isSignedUp) {
      return <Redirect to="/login" />;
    } else if (isLoggedin) {
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
                  InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                  inputProps={{ style: { fontSize: "1.5rem" } }}
                  label="Name"
                  className="signup__input"
                  type="text"
                  onChange={(e) => {
                    this.handleInputChange("name", e.target.value);
                  }}
                />
                <TextField
                  id="standard-error"
                  InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                  inputProps={{ style: { fontSize: "1.5rem" } }}
                  label="Email"
                  className="signup__input"
                  type="email"
                  onChange={(e) => {
                    this.handleInputChange("email", e.target.value);
                  }}
                />
                <div style={{ width: "fit-content", position: "relative" }}>
                  <TextField
                    className="standard-error-helper-text signup__input"
                    label="Password"
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
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
                <TextField
                  className="standard-error-helper-text"
                  label="Confirm Password"
                  style={{ marginLeft: "0", marginBottom: "4rem" }}
                  InputLabelProps={{ style: { fontSize: "1.5rem" } }}
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

import React,{useState} from 'react'
import './Signup.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye,faEyeSlash,} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 270,
    },

  },
}));
function Signup() {
    const classes = useStyles();
    const [iconVisible,setIconVisible]=useState(false);

    return (
        <div className="signup">
            <div className="signup__card">
                <div className="signup__card--left">
                </div>
                <div className="signup__card--right">
                    <div className="signup__heading">sign up</div>
    <form className={classes.root} noValidate autoComplete="off">
        <div style={{display: 'flex' ,flexDirection: 'column'}}>
            <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Name"  style={{marginLeft:'0'}} type="text"/>
            <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Email"  style={{marginLeft:'0'}} type="email"/>
            <div style={{width:'fit-content',position:'relative'}}>
            <TextField
            id="standard-error-helper-text"
            label="Password"
            style={{marginLeft:'0'}}
            InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
            type={iconVisible?"text":"password"}
            />
            <FontAwesomeIcon icon={iconVisible?faEye:faEyeSlash} style={{fontSize:'12px',position:'absolute',right:'10px',bottom:'20px'}} onClick={()=>setIconVisible(prev=>!prev)}/>
            </div>
            <TextField
            id="standard-error-helper-text"
            label="Confirm Password"
            style={{marginLeft:'0' , marginBottom:'4rem'}}
            InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
            type={iconVisible?"text":"password"}
            />
            <Button variant="outlined" className="signup__btn" style={{width:'15rem', height:'4rem',border:'2px solid #c69963', alignSelf:'center'}}>
                Sign up
            </Button>
            <div className="signup__text">Already registered? <Link to="login" className="signup__link"><b className="signup__text--b">Login Now!</b></Link></div>
        </div>
    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup

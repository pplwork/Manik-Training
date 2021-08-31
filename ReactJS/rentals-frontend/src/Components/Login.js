import React from 'react'
import './Login.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 270,
    },

  },
}));
function Login() {
    const classes = useStyles();
    return (
        <>
        <div className="login">
            <div className="login__card">
                <div className="login__card--left">
                </div>
                <div className="login__card--right">
                    <div className="login__heading">login</div>
    <form className={classes.root} noValidate autoComplete="off">
        <div style={{display: 'flex' ,flexDirection: 'column'}}>
            <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Email"  style={{marginLeft:'0'}} type="email"/>
            <TextField
            id="standard-error-helper-text"
            label="Password"
            style={{marginLeft:'0' , marginBottom:'4rem'}}
            InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
            type="password"
            />
            <Button variant="outlined" className="login__btn" style={{width:'15rem', height:'4rem',border:'2px solid #c69963', alignSelf:'center'}}>
                Log In
            </Button>
            <div className="login__text">Not registered? <b className="login__text--b">Register Now!</b></div>
        </div>
    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login

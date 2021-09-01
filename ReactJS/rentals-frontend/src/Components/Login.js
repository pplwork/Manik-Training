import React, { Component} from 'react'
import './Login.scss'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye,faEyeSlash,} from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom';
import{login , clearAuthState} from '../actions/auth';
import { connect } from 'react-redux';
// import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            iconVisible: false
        }
    }
    DoStyles = makeStyles((theme) => ({
        root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 270,
        },
        },
        }));
    // classes = this.DoStyles();
    componentWillUnmount() {
    this.props.dispatch(clearAuthState());
    }
    handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  changeIconVisibleState=()=>{
    if(this.state.iconVisible){
        this.setState({iconVisible:false})
    }
    else
    this.setState({iconVisible:true})
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
    render(){
    const { error, inProgress, isLoggedin } = this.props.auth;
    if(isLoggedin){
      return  <Redirect to='/'/>
    }
    return (
        <>
        <div className="login">
            <div className="login__card">
                <div className="login__card--left">
                </div>
                <div className="login__card--right">
                    <div className="login__heading">login</div>
    <form  noValidate autoComplete="off">
        <div style={{display: 'flex' ,flexDirection: 'column'}}>
            <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Email" required  style={{marginLeft:'0',marginBottom:'2rem'}} type="email" onChange={this.handleEmailChange}/>
            <div style={{position:'relative' ,marginBottom:'4rem'}}>
            <TextField
            id="standard-error-helper-text"
            label="Password"
            style={{marginLeft:'0' ,width: '270px' }}
            InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
            required
            error={{error}?false:true}
            type={this.state.iconVisible?"text":"password"}
            onChange={this.handlePasswordChange}
            />
            <FontAwesomeIcon icon={this.state.iconVisible?faEye:faEyeSlash} style={{fontSize:'12px',position:'absolute',right:'10px',bottom:'1rem'}} onClick={this.changeIconVisibleState}/>
            </div>
            <Button variant="outlined" className="login__btn" style={{width:'15rem', height:'4rem',border:'2px solid #c69963', alignSelf:'center'}} onClick={this.handleFormSubmit} >
                Log In
            </Button>
            <div className="login__text">Not registered? <Link to="signup" className="login__link"><b className="login__text--b">Register Now!</b></Link></div>
        </div>
    </form>
                </div>
            </div>
        </div>
        </>
    )
    }
}
function mapStateToProps(state){
    return{
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Login); 





//ORIGINAL 

// import React, { useState } from 'react'
// import './Login.scss'
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faEye,faEyeSlash,} from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// // import axios from 'axios';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 270,
//     },

//   },
// }));
// const handleChange = (e,type)=>{
//     const value = e.target.value;
//     type(value)
    
// }
// const handleSubmit =(email,password)=>{
    
// }
// function Login() {
//     const classes = useStyles();
//     let [email,setEmail]= useState(null);
//     let [password,setPassword] = useState(null);
//     const [iconVisible,setIconVisible]=useState(false);
//     return (
//         <>
//         <div className="login">
//             <div className="login__card">
//                 <div className="login__card--left">
//                 </div>
//                 <div className="login__card--right">
//                     <div className="login__heading">login</div>
//     <form className={classes.root} noValidate autoComplete="off">
//         <div style={{display: 'flex' ,flexDirection: 'column'}}>
//             <TextField  id="standard-error" InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}} label="Email" required  style={{marginLeft:'0'}} type="email" onChange={(e)=>{handleChange(e,setEmail)}}/>
//             <div style={{position:'relative' ,marginBottom:'4rem'}}>
//             <TextField
//             id="standard-error-helper-text"
//             label="Password"
//             style={{marginLeft:'0' }}
//             InputLabelProps={{style:{fontSize: '1.5rem'}}} inputProps={{style:{fontSize: '1.5rem'}}}
//             required
//             type={iconVisible?"text":"password"}
//             onChange={(e)=>{handleChange(e,setPassword)}}
//             />
//             <FontAwesomeIcon icon={iconVisible?faEye:faEyeSlash} style={{fontSize:'12px',position:'absolute',right:'10px',bottom:'2rem'}} onClick={()=>setIconVisible(prev=>!prev)}/>
//             </div>
//             <Button variant="outlined" className="login__btn" style={{width:'15rem', height:'4rem',border:'2px solid #c69963', alignSelf:'center'}} onClick={()=>{handleSubmit(email,password)}} >
//                 Log In
//             </Button>
//             <div className="login__text">Not registered? <Link to="signup" className="login__link"><b className="login__text--b">Register Now!</b></Link></div>
//         </div>
//     </form>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Login

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.scss'
import icon from '../assets/icon-white.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-2),
  },
  title: {
    flexGrow: 1,
    fontSize: '2rem',
    textTransform:'uppercase'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <img src={icon} style={{height:'2.5rem',marginRight:'1rem'}} alt="" />
          <Typography variant="h6" className={classes.title}>
            rentals
          </Typography>
          <Button className="navbar__btn" color="inherit">Sign Up</Button>
          <Button className="navbar__btn" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

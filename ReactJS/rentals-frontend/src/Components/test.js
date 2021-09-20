import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import "./test.scss";
import MenuIcon from "@material-ui/icons/Menu";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider } from "@material-ui/core";
// import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const auth = useSelector((state) => state.auth);
  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ marginTop: "25rem" }}
    >
      <div className={classes.drawerContainer}>
        {/* <Divider /> */}
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Typography style={{ fontSize: "1.3rem", fontWeight: "500" }}>
              Apartments
            </Typography>
            <ExpandMore style={{ marginLeft: "auto" }} />
          </AccordionSummary>
          <AccordionDetails className="sidebar__ele">
            <Link
              className="sidebar__links"
              to="/home"
              onClick={toggleDrawer(anchor, false)}
            >
              <Typography>View Apartments</Typography>
            </Link>
          </AccordionDetails>
        </Accordion>
        {auth.user.role === "admin" ? (
          <Accordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={{
                backgroundColor: "#ffffff",
              }}
            >
              <Typography style={{ fontSize: "1.3rem", fontWeight: "500" }}>
                Users
              </Typography>
              <ExpandMore style={{ marginLeft: "auto" }} />
            </AccordionSummary>
            <AccordionDetails className="sidebar__ele">
              <Link
                className="sidebar__links"
                to="/users"
                onClick={toggleDrawer(anchor, false)}
              >
                <Typography>Edit User</Typography>
              </Link>
            </AccordionDetails>
            <Divider />
            <AccordionDetails className="sidebar__ele">
              <Link
                className="sidebar__links"
                to="/users/add"
                onClick={toggleDrawer(anchor, false)}
              >
                <Typography>Add User</Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
        ) : (
          ""
        )}
      </div>
    </div>
  );
  return (
    <div className="leftDrawer">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            // style={{ backgroundColor: "white" }}
          >
            {" "}
            {/* <FontAwesomeIcon
              icon={faHamburger}
              style={{ fontSize: "1.5rem" }}
            /> */}
            <MenuIcon style={{ fontSize: "2.5rem" }} />{" "}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

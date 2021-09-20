import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Divider } from "@material-ui/core";
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
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    margin: "auto 0",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function Home(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  if (!auth.user) {
    <Redirect to="/login" />;
    return;
  }
  return (
    <>
      <div className="home">
        <div className="drawer">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
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
                  <Link className="sidebar__links" to="/home">
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
                    <Typography
                      style={{ fontSize: "1.3rem", fontWeight: "500" }}
                    >
                      Users
                    </Typography>
                    <ExpandMore style={{ marginLeft: "auto" }} />
                  </AccordionSummary>
                  <AccordionDetails className="sidebar__ele">
                    <Link className="sidebar__links" to="/users">
                      <Typography>Edit User</Typography>
                    </Link>
                  </AccordionDetails>
                  <Divider />
                  <AccordionDetails className="sidebar__ele">
                    <Link className="sidebar__links" to="/users/add">
                      <Typography>Add User</Typography>
                    </Link>
                  </AccordionDetails>
                </Accordion>
              ) : (
                ""
              )}
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default Home;

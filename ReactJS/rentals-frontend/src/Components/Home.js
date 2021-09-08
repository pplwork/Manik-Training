import React, { useEffect, useState } from "react";
import "./Home.scss";
import Slider from "@material-ui/core/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments, fetchFilterApartments } from "../actions/apartments";
import ApartmentCard from "./ApartmentCard";
import WrappedMap from "./Map";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
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
function valuetext(value) {
  return `${value}`;
}
const BudgetMarks = [
  {
    value: 1,
    label: "1k",
  },
  {
    value: 20,
    label: "20k",
  },
  {
    value: 40,
    label: "40k",
  },
  {
    value: 60,
    label: "60k",
  },
  {
    value: 80,
    label: "80k",
  },
  {
    value: 100,
    label: "100k",
  },
];
const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
];

const sizeMarks = [
  {
    value: 0,
    label: "0 sq.ft.",
  },
  {
    value: 1000,
    label: "1000 sq.ft.",
  },
  {
    value: 2000,
    label: "2000 sq.ft.",
  },
  {
    value: 3000,
    label: "3000 sq.ft.",
  },
  {
    value: 4000,
    label: "4000 sq.ft.",
  },
];
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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function Home() {
  const [budgetValue, setBudgetValue] = React.useState([1, 80]);
  const [bedroomValue, setBedroomValue] = React.useState([1, 6]);
  const [sizeValue, setSizeValue] = React.useState([1, 3500]);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(async () => {
    await dispatch(fetchApartments());
  }, []);
  const handleChangeBudget = (event, newValue) => {
    setBudgetValue(newValue);
  };
  const handleSubmitFilter = () => {
    dispatch(fetchFilterApartments(budgetValue, bedroomValue, sizeValue));
  };
  const handleChangeBedroom = (event, newValue) => {
    setBedroomValue(newValue);
  };
  const handleSize = (event, newValue) => {
    setSizeValue(newValue);
  };
  const apartments = useSelector((state) => state.apartments);
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
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
                <Typography>Apartments</Typography>
                <ExpandMore style={{ marginLeft: "auto" }} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Okay</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Drawer>
      </div>
      <div className="home__filter">
        <div className="filter__heading">Filters</div>
        <div className="divider"></div>
        <div className="filter__box filter__budget">
          <div className="filter__budget--heading">Budget (in Lac)</div>
          <div>
            <Slider
              value={budgetValue}
              onChange={handleChangeBudget}
              onChangeCommitted={handleSubmitFilter}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              step={4}
              style={{ color: "#101D2C" }}
              marks={BudgetMarks}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="filter__box filter__bedroom">
          <div className="filter__budget--heading">No. of BedRooms</div>
          <div>
            <Slider
              value={bedroomValue}
              onChange={handleChangeBedroom}
              onChangeCommitted={handleSubmitFilter}
              valueLabelDisplay="off"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              min={1}
              max={6}
              style={{ color: "#101D2C", width: "95%" }}
              marks={marks}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="filter__box filter__size">
          <div className="filter__budget--heading">Size</div>
          <div>
            <Slider
              value={sizeValue}
              onChange={handleSize}
              onChangeCommitted={handleSubmitFilter}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              min={0}
              step={100}
              max={4000}
              style={{ color: "#101D2C", width: "95%" }}
              marks={sizeMarks}
            />
          </div>
        </div>
      </div>
      <div className="home__apartments">
        <div className="map">
          <WrappedMap
            app={apartments}
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAywJ46VQknaZbBSC5aZKgkQHffaoqEDII"
            }
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "400px" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
        <div className="home__title">Propery for Rent in Delhi for Family</div>
        {apartments
          ? apartments.map((app) => {
              return <ApartmentCard app={app} key={app.id} />;
            })
          : ""}
      </div>
    </div>
  );
}

export default Home;

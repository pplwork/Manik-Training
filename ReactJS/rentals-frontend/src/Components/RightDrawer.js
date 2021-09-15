import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import "./RightDrawer.scss";
import { useDispatch } from "react-redux";
// import { Link } from 'react-router-dom';
import Slider from "@material-ui/core/Slider";
import { fetchFilterApartments } from "../actions/apartments";
import FilterListIcon from "@material-ui/icons/FilterList";
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
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
// const Accordion = withStyles({
//   root: {
//     border: "1px solid rgba(0, 0, 0, .125)",
//     boxShadow: "none",
//     "&:not(:last-child)": {
//       borderBottom: 0,
//     },
//     "&:before": {
//       display: "none",
//     },
//     "&$expanded": {
//       margin: "auto",
//     },
//   },
//   expanded: {},
// })(MuiAccordion);

// const AccordionSummary = withStyles({
//   root: {
//     backgroundColor: "rgba(0, 0, 0, .03)",
//     borderBottom: "1px solid rgba(0, 0, 0, .125)",
//     marginBottom: -1,
//     minHeight: 56,
//     "&$expanded": {
//       minHeight: 56,
//     },
//   },
//   content: {
//     "&$expanded": {
//       margin: "12px 0",
//     },
//   },
//   expanded: {},
// })(MuiAccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiAccordionDetails);
export default function RightDrawer() {
  const classes = useStyles();
  const [budgetValue, setBudgetValue] = React.useState([1, 80]);
  const [bedroomValue, setBedroomValue] = React.useState([1, 6]);
  const [sizeValue, setSizeValue] = React.useState([1, 3500]);
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const auth = useSelector((state) => state.auth);
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
  function valuetext(value) {
    return `${value}`;
  }
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
      style={{ marginTop: "15rem" }}
    >
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
    </div>
  );
  return (
    <div className="rightDrawer">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            // style={{ backgroundColor: "white" }}
          >
            <FilterListIcon />
            <div style={{ fontSize: "1.5rem", marginLeft: "0.5rem" }}>
              Filters
            </div>
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

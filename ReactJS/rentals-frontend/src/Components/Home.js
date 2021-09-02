import React, { useState } from "react";
import "./Home.scss";
import Slider from "@material-ui/core/Slider";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
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

function Home() {
  const [budgetValue, setBudgetValue] = React.useState([1, 50]);
  const [bedroomValue, setBedroomValue] = React.useState([1, 6]);
  const [sizeValue, setSizeValue] = React.useState([1, 2000]);
  const [imageSelected, setImageSelected] = useState("");
  const handleChangeBudget = (event, newValue) => {
    console.log(newValue);
    setBudgetValue(newValue);
  };
  const handleChangeBedroom = (event, newValue) => {
    setBedroomValue(newValue);
  };
  const handleSize = (event, newValue) => {
    console.log(newValue);
    setSizeValue(newValue);
  };
  return (
    <div className="home">
      <div className="home__filter">
        <div className="filter__heading">Filters</div>
        <div className="divider"></div>
        <div className="filter__box filter__budget">
          <div className="filter__budget--heading">Budget (in Lac)</div>
          <div>
            <Slider
              value={budgetValue}
              onChange={handleChangeBudget}
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
      <div className="home__apartments"></div>
    </div>
  );
}

export default Home;

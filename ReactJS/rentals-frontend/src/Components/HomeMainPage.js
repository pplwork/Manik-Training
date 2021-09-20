import React, { useEffect } from "react";

import Slider from "@material-ui/core/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments, fetchFilterApartments } from "../actions/apartments";
import ApartmentCard from "./ApartmentCard";
import WrappedMap from "./Map";
import { Redirect } from "react-router-dom";
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
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
//   drawerContainer: {
//     overflow: "auto",
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));
function HomeMainPage(props) {
  const apartments = useSelector((state) => state.apartments);
  const [budgetValue, setBudgetValue] = React.useState([1, 80]);
  const [bedroomValue, setBedroomValue] = React.useState([1, 6]);
  const [sizeValue, setSizeValue] = React.useState([1, 3500]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  if (!auth.user) {
    <Redirect to="/login" />;
  }
  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);
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

  return (
    <div className="homepagemain">
      {props.right ? null : (
        <div className="home__filter ml-mt-md">
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
      )}

      <div className="home__apartments">
        <div className="home__title">View Property on Map</div>
        <div className="map">
          <WrappedMap
            app={apartments}
            googleMapURL={
              "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAywJ46VQknaZbBSC5aZKgkQHffaoqEDII"
            }
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div className="map__dimensions" />}
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

export default HomeMainPage;

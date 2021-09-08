import "./app.scss";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { getAuthTokenFromLocalStorage } from "./helpers/utils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Home from "./Components/Home";
import { useDispatch } from "react-redux";
import { authenticateUser } from "./actions/auth";
import UserSearch from "./Components/UserSearch";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      dispatch(authenticateUser(user));
    }
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <TemporaryDrawer /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Landing />;
            }}
          />
          <Route
            exact
            path="/home"
            render={() => {
              return <UserSearch />;
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              return <Signup />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <Login />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

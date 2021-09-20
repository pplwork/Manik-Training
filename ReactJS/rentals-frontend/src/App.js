import "./app.scss";
import React from "react";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { getAuthTokenFromLocalStorage } from "./helpers/utils";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "./actions/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import UserProfile from "./Components/UserProfile";
import MainPage from "./Components/MainPage";
import MainUser from "./Components/MainUser";
import AddMainUser from "./Components/AddMainUser";
import Page404 from "./Components/Page404";
const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component, props } = privateRouteProps;
  return (
    <Route
      exact
      path={path}
      render={() => {
        return isLoggedin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        );
      }}
    />
  );
};

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      dispatch(authenticateUser(user));
    }
  }, [dispatch]);

  return (
    <>
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
            <PrivateRoute
              exact
              path="/home"
              component={MainPage}
              isLoggedin={auth.isLoggedin}
            />
            <PrivateRoute
              exact
              path="/users/add"
              component={AddMainUser}
              isLoggedin={auth.isLoggedin}
            />
            <PrivateRoute
              exact
              path="/users"
              component={MainUser}
              isLoggedin={auth.isLoggedin}
            />

            {/* <Route
              exact
              path="/user/profile"
              render={() => {
                return <UserProfile user={auth.user} />;
              }}
            /> */}
            <PrivateRoute
              path="/user/profile"
              component={UserProfile}
              isLoggedin={auth.isLoggedin}
              props={auth.user}
            />

            {/* <PrivateRoute
              path="/home"
              component={Home}
              isLoggedin={auth.isLoggedin}
            /> */}
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
            <Route component={Page404} />
            {/* <Route exact="/users" component={UserSearch} /> */}
          </Switch>
        </div>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;

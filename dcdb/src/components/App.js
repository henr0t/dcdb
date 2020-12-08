import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Loginpage } from "../pages/Loginpage";
import Movie from "../pages/Movie";
import { NoMatch } from "../pages/NoMatch";
import { Layout } from "./Layout";

const dotenv = require("dotenv").config();

class App extends React.Component {
  state = { user: [] };

  componentDidMount() {
    console.log("global storage: " + localStorage.getItem("token"));
    console.log("user: " + localStorage.getItem("userid"));
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="navbar-placeholder">
            <Link to={"/"}>Home</Link>
          </div>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Loginpage} />
              <Route exact path="/movie/:movieId" component={Movie} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

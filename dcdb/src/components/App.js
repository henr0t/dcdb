import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { Loginpage } from "../pages/Loginpage";
import Movie from "../pages/Movie";
import { NoMatch } from "../pages/NoMatch";
import { Layout } from "./Layout";
import local from "../api/local";

const dotenv = require("dotenv").config();

class App extends React.Component {
  state = { user: null };

  componentDidMount() {
    local
      .get("/api/v1/user/" + localStorage.getItem("userid"))
      .then((response) => {
        this.setState({ user: response.data });
        console.log(this.state.user);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="navbar-placeholder">
            <Link to={"/"}>Home</Link>
            {this.state.user
              ? `Logged in as ` + this.state.user.username
              : `Sign in`}
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

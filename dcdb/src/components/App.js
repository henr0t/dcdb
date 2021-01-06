import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Loginpage } from "../pages/Loginpage";
import Movie from "../pages/Movie";
import { NoMatch } from "../pages/NoMatch";
import { Layout } from "./Layout";
import Navigationbar from "./Navigationbar";

const dotenv = require("dotenv").config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginStatus: false };
    this.loggedIn = this.loggedIn.bind(this);
  }

  loggedIn() {
    if (localStorage.getItem("userid") && localStorage.getItem("token")) {
      this.setState({ loginStatus: true });
      console.log(this.state.loginStatus);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigationbar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/login"
                render={() => <Loginpage loggedIn={this.loggedIn} />}
              />
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

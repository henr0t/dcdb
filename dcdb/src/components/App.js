import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Loginpage } from "../pages/Loginpage";
import Movie from "../pages/Movie";
import { NoMatch } from "../pages/NoMatch";
import { Layout } from "./Layout";
import Navigationbar from "./Navigationbar";
import local from "../api/local";

const dotenv = require("dotenv").config();

class App extends React.Component {
  state = { user: null };

  componentDidMount() {
    if (!localStorage.getItem("userid") && !localStorage.getItem("token")) {
    } else {
      local
        .get("/api/v1/user/" + localStorage.getItem("userid"))
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          this.setState({ user: response.data });
        })
        .catch((error) => console.log(error));
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

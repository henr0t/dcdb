import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Loginpage } from "../pages/Loginpage";
import Movie from "../pages/Movie";
import Profile from "../pages/Profile";
import { NoMatch } from "../pages/NoMatch";
import { Layout } from "./Layout";
import Navigationbar from "./Navigationbar";
import AuthContext from "./AuthContext";

const dotenv = require("dotenv").config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LOGIN_STATUS: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ LOGIN_STATUS: true });
  }
  logout() {
    this.setState({ LOGIN_STATUS: false });
    localStorage.clear();
  }

  componentDidMount() {
    if (localStorage.getItem("token") && localStorage.getItem("userid")) {
      this.login();
    }
  }

  render() {
    const value = {
      LOGIN_STATUS: this.state.LOGIN_STATUS,
      login: this.login,
      logout: this.logout,
    };

    return (
      <AuthContext.Provider value={value}>
        <React.Fragment>
          <Router>
            <Navigationbar />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Loginpage} />
                <Route exact path="/movie/:movieId" component={Movie} />
                <Route exact path="/profile/" component={Profile} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
      </AuthContext.Provider>
    );
  }
}

export default App;

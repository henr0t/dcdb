import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";
import { NoMatch } from "../pages/NoMatch";
import { Layout } from "./Layout";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movie/:movie" component={Movie} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;

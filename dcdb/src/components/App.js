import React from "react";
import MovieImage from "./MovieImage";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui text container">
            <h1 className="ui inverted header">DC Film Database</h1>
            <h2>Find information and keep track of films you have watched!</h2>
          </div>
        </div>
        <div className="ui center aligned container">
          <MovieImage movieId="49521" />
        </div>
      </div>
    );
  }
}

export default App;

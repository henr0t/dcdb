import "./App.css";
import React from "react";
import ImageCarousel from "./ImageCarousel";

class App extends React.Component {
  render() {
    return (
      <div>
        <div
          className="ui center aligned container"
          style={{ marginTop: "50px" }}
        >
          <ImageCarousel />
        </div>
      </div>
    );
  }
}

export default App;

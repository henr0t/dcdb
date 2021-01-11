import "./Watchlist.css";
import React from "react";
import MoviePoster from "./MoviePoster";
import local from "../api/local";

class Watchlist extends React.Component {
  state = { watchlist: [] };

  componentDidMount() {
    if (!localStorage.getItem("userid") && !localStorage.getItem("token")) {
    } else {
      local
        .get("/api/v1/user/" + localStorage.getItem("userid") + "/watchlist")
        .then((response) => {
          this.setState({ watchlist: response.data });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    let posters = this.state.watchlist.map((movie) => {
      return <MoviePoster width="300" movieId={movie.tmdbId} key={movie.id} />;
    });

    return <div className="watchlist">{posters}</div>;
  }
}

export default Watchlist;

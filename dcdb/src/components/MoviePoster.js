import React from "react";
import tmdb from "../api/tmdb";
import { Link } from "react-router-dom";

class MoviePoster extends React.Component {
  state = { movie: [] };

  componentDidMount() {
    tmdb.get("/movie/" + this.props.movieId).then((response) => {
      this.setState({ movie: response.data });
    });
  }

  render() {
    const { poster_path, original_title, id } = this.state.movie;

    if (poster_path != null) {
      return (
        <div className="fadin-animation2">
          <React.Fragment>
            <Link to={"/movie/" + id}>
              <img
                alt={original_title}
                src={
                  "http://image.tmdb.org/t/p/w" + this.props.width + poster_path
                }
              />
            </Link>
          </React.Fragment>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default MoviePoster;

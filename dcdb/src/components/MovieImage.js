import React from "react";
import tmdb from "../api/tmdb";
import { Link } from "react-router-dom";

class MovieImage extends React.Component {
  state = { movie: [] };

  componentDidMount() {
    tmdb.get("/movie/" + this.props.movieId).then((response) => {
      this.setState({ movie: response.data });
    });
  }

  render() {
    const { backdrop_path, original_title, id } = this.state.movie;

    if (backdrop_path != null) {
      return (
        <React.Fragment>
          <Link to={"/movie/" + id}>
            <img
              className="d-block w-100"
              alt={original_title}
              src={"http://image.tmdb.org/t/p/w1280" + backdrop_path}
            />
          </Link>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}

export default MovieImage;

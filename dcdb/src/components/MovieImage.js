import React from "react";
import tmdb from "../api/tmdb";
import { Link } from "react-router-dom";

class MovieImage extends React.Component {
  state = { movie: [] };

  componentDidMount() {
    this.getData(this.props.movieId);
  }

  getData = async (movieId) => {
    const response = await tmdb.get("/movie/" + movieId);
    this.setState({ movie: response.data });
  };

  render() {
    const { backdrop_path, original_title } = this.state.movie;

    return (
      <React.Fragment>
        <Link to={"/movie/" + original_title}>
          <img
            className="d-block w-100"
            alt={original_title}
            src={"http://image.tmdb.org/t/p/w1280" + backdrop_path}
          />
        </Link>
      </React.Fragment>
    );
  }
}

export default MovieImage;

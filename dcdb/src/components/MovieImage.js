import React from "react";
import tmdb from "../api/tmdb";

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
      <img
        className="d-block w-100"
        alt={original_title}
        src={"http://image.tmdb.org/t/p/w1280" + backdrop_path}
      />
    );
  }
}

export default MovieImage;

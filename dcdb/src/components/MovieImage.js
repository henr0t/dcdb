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
    const { backdrop_path } = this.state.movie;

    return (
      <div>
        <img src={"http://image.tmdb.org/t/p/w300" + backdrop_path} />
      </div>
    );
  }
}

export default MovieImage;

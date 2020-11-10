import React from "react";
import tmdb from "../api/tmdb";
import MovieDetails from "../components/MovieDetails";
import MovieMedia from "../components/MovieMedia";
import MovieCast from "../components/MovieCast";
import MovieVideo from "../components/MovieVideo";
import data from "../data/movieList";
import Axios from "axios";

class Movie extends React.Component {
  state = { movie: null, media: [], cast: [], crew: [], video: [] };

  componentDidMount() {
    const requestData = tmdb.get("/movie/" + this.props.match.params.movieId);
    const requestMedia = tmdb.get(
      "/movie/" + this.props.match.params.movieId + "/images"
    );
    const requestCast = tmdb.get(
      "/movie/" + this.props.match.params.movieId + "/credits"
    );

    const requestVideo = tmdb.get(
      "/movie/" + this.props.match.params.movieId + "/videos"
    );

    let idCheck = data.map((movie) => {
      return movie.movieId;
    });

    if (idCheck.includes(this.props.match.params.movieId)) {
      Axios.all([requestData, requestMedia, requestCast, requestVideo]).then(
        (response) => {
          this.setState({
            movie: response[0].data,
            media: response[1].data.backdrops,
            cast: response[2].data.cast,
            crew: response[2].data.crew,
            video: response[3].data.results,
          });
        }
      );
    }
  }

  renderContent() {
    if (
      (this.state.movie === null) &
      (this.state.media.length === 0) &
      (this.state.cast.length === 0) &
      (this.state.crew.length === 0) &
      (this.state.video.length === 0)
    ) {
      return null;
    } else {
      return (
        <div className="fadin-animation">
          <MovieDetails movies={this.state.movie} crew={this.state.crew} />
          <h3 className="underline-header">Photos</h3>
          <MovieMedia>{this.state.media}</MovieMedia>
          <h3 className="underline-header">Cast </h3>
          <MovieCast>{this.state.cast}</MovieCast>
          <h3 className="underline-header">Videos</h3>
          <div className="movie-segment">
            <MovieVideo>{this.state.video}</MovieVideo>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Movie;

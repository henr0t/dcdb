import React from "react";
import local from "../api/local";

class WatchButton extends React.Component {
  state = { watchlist: [], watched: false };

  addToWatchlist() {
    if (this.state.watchlist) {
      local.put(
        "/api/v1/film/" +
          this.props.children +
          "/" +
          localStorage.getItem("userid")
      );
      this.setState({ watched: true });
    }
  }

  checkWatchlist() {
    if (!this.state.watchlist) {
    } else {
      if (
        this.state.watchlist
          .map((film) => {
            return film.tmdbId;
          })
          .includes(this.props.children.toString())
      ) {
        this.setState({ watched: true });
      } else {
        this.setState({ watched: false });
      }
    }
  }

  async requestUserWatchlist() {
    if (!localStorage.getItem("userid") && !localStorage.getItem("token")) {
    } else {
      await local
        .get("/api/v1/user/" + localStorage.getItem("userid"))
        .then((response) => {
          this.setState({ watchlist: response.data.watchlist });
          console.log(this.state.watchlist);
        })
        .catch((error) => console.log(error));

      this.checkWatchlist();
    }
  }

  componentDidMount() {
    this.requestUserWatchlist();
  }

  render() {
    if (this.state.watched) {
      return (
        <React.Fragment>
          <button
            className="add-to-watchlist"
            onClick={() => this.addToWatchlist()}
            disabled
          >
            Added to watchlist
          </button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button
            className="add-to-watchlist"
            onClick={() => this.addToWatchlist()}
          >
            Add to watchlist
          </button>
        </React.Fragment>
      );
    }
  }
}

export default WatchButton;

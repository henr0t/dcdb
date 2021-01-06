import React from "react";
import local from "../api/local";

class WatchButton extends React.Component {
  state = { user: JSON.parse(localStorage.getItem("user")), watched: false };

  addToWatchlist() {
    if (this.state.user) {
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
    if (!this.state.user) {
    } else {
      if (
        this.state.user.watchlist
          .map((watchlist) => {
            return watchlist.tmdbId;
          })
          .includes(this.props.children.toString())
      ) {
        this.setState({ watched: true });
      } else {
        this.setState({ watched: false });
      }
    }
  }

  componentDidMount() {
    this.checkWatchlist();
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

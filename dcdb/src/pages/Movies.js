import React from "react";
import data from "../data/movieData";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

class Profile extends React.Component {
  state = { list: data };

  filterList = (searchTerm) => {
    const newList = data.filter((movie) => {
      if (
        movie.title
          .toLowerCase()
          .split("")
          .join("")
          .indexOf(searchTerm.toLowerCase().split("").join("")) !== -1
      ) {
        return movie;
      }
      return null;
    });
    this.setState({
      list: newList,
    });
  };

  render() {
    return (
      <div className="fadin-animation">
        <h3 className="underline-header">Search</h3>
        <div className="segment text-box">
          <SearchBar
            filterList={this.filterList}
            placeholder="Search for a movie title"
          />
        </div>
        <div className="segment text-box">
          <MovieList movielist={this.state.list} />
        </div>
      </div>
    );
  }
}

export default Profile;

import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  onEnter = (event) => {
    event.preventDefault();
    this.props.filterList(this.state.searchTerm);
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.onEnter}>
          <input
            onChange={this.onChange}
            type="text"
            placeholder={this.props.placeholder}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

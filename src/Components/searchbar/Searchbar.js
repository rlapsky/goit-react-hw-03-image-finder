import React, { Component } from "react";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  onHeandlerSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  onHeandlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onHeandlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.onHeandlerChange}
            className="SearchForm-input"
            type="text"
            placeholder="Search images and photos"
            name="searchQuery"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

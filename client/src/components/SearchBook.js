import React, { Component } from "react";
import PropTypes from "prop-types";

export class SearchBook extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchBook(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10" }}
          placeholder="search Book here ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          name="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

SearchBook.propTypes = {
  searchBook: PropTypes.func.isRequired,
};

export default SearchBook;

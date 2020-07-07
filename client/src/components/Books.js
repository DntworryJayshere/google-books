import React, { Component } from "react";
import BookItem from "./BookItem"
import PropTypes from "prop-types";

class Books extends Component {
  render() {
    return this.props.books.map((book) => (
      <BookItem 
      key={book.id}
      book={book}
      saveBook={this.props.saveBook}
      />
    ));
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  saveBook: PropTypes.func.isRequired,
};

export default Books;

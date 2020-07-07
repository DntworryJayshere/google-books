import React, { Component } from "react";
import PropTypes from "prop-types";

export class BookItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.book.saved ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.book;

    return (
      <div style={this.getStyle()}>
        <p>
          {title}
          <button onClick={this.props.saveBook.bind(this, id)} style={btnStyle}>
            Save
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  padding: "5px 9px",
  borderRadius: "80%",
  cursor: "pointer",
  float: "right",
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  saveBook: PropTypes.func.isRequired,
};

export default BookItem;

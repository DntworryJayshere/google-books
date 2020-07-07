import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Books from "./components/Books";
import SearchBook from "./components/SearchBook";

import NavBar from "./components/layout/NavBar";
import Header from "./components/layout/Header";

import Saved from "./components/pages/Saved";

import Axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        title: "good book",
        author: "charlie",
        description: "it was a pretty good book overall",
        saved: false,
      },
      {
        id: 2,
        title: "great book",
        author: "mia",
        description: "it was a pretty great book overall",
        saved: false,
      },
      {
        id: 3,
        title: "okay book",
        author: "jay",
        description: "it was a pretty okay book overall",
        saved: false,
      },
    ],
  };

  // componentDidMount() {
  //   Axios.get(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=15"
  //   ).then((res) => this.setState({ todos: res.data }));
  // }

  saveBook = (id) => {
    this.setState({
      //10c) if the id passed up to the method is equal to the todo(id) contained within the todos: array that is mapped through, then mark it completed and return todo the object to the todos array
      books: this.state.books.map((book) => {
        if (book.id === id) {
          book.saved = !book.saved;
        }
        return book;
      }),
    });
  };

  searchBook = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      saved: false,
    }).then((res) => this.setState({ books: [...this.state.books, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <NavBar />
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <div>
                    <h3>Book Search</h3>
                    <SearchBook searchBook={this.searchBook} />
                  </div>

                  <div>
                    <h3>Results</h3>
                    <Books books={this.state.books} saveBook={this.saveBook} />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path="/saved" component={Saved} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

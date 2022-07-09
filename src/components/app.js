import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/book/get")
      .then((response) => {
        console.log(response);
        this.setState({ books: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderBooks() {
    return this.state.books.map((book) => {
      return (
        <div key={book.id}>
          <h2>Book Title: {book.name}</h2>
          <h2>Book author: {book.author}</h2>
          <h2>Book price: {book.price}</h2>
          <h2>Book description: {book.description}</h2>
          <br></br>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My Books</h1>
        {this.renderBooks()}
      </div>
    );
  }
}

import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import HomePage from './HomePage';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
          this.setState({ books: books });
      });
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <HomePage
            books={this.state.books}
            updateBook={this.updateBook}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            updateBook={(book, shelf) => {
                this.updateBook(book, shelf);
            }}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import {DebounceInput} from 'react-debounce-input'

class SearchBooks extends Component {
  state = {
   query: '',
   searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.searchBooks(query, 20)
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchResults) => {
        if (
          searchResults &&
          typeof searchResults !== "undefined" &&
          !searchResults.error
        ) {
          searchResults = searchResults.map(result => {
            const currentBook = this.props.books.find(currentBook => currentBook.id === result.id)
            if (currentBook) {
              return currentBook
            } else {
              return result
            }
          })
          this.setState({ searchResults: searchResults })
        } else {
          this.setState({ searchResults: [] })
        }
      })
    } else {
      this.setState({ searchResults: [] })
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              minLength={3}
              debounceTimeout={300}
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BookShelf
              books={this.state.searchResults}
              onChangeShelf={this.props.updateBook}
            />
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

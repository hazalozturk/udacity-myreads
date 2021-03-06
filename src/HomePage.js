import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class HomePage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookShelf
                onChangeShelf={this.props.updateBook}
                books={this.props.books.filter((book) => book.shelf === "currentlyReading")}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelf
                onChangeShelf={this.props.updateBook}
                books={this.props.books.filter((book) => book.shelf === "wantToRead")}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BookShelf
                onChangeShelf={this.props.updateBook}
                books={this.props.books.filter((book) => book.shelf === "read")}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default HomePage

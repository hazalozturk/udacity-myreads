import React, {Component} from 'react';
import Book from './Book'


class BookShelf extends Component {
  render() {
      return (
          <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) =>
		    <li key={book.id}>
			<Book book={book} onChangeShelf={this.props.onChangeShelf}/>
		    </li>
                )}
              </ol>
          </div>
      )
  }
}

export default BookShelf;

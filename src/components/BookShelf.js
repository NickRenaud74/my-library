import React from 'react'
import Book from './Book'
import AddBooks from './AddBooks'
import PropTypes from 'prop-types'

function BookShelf({ books, shelf, changeShelf }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            {books.length ?
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book =>
                            <Book key={book.id} book={book} changeShelf={changeShelf} />
                        )}
                    </ol>
                </div>
                : <AddBooks />
            }
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array,
    shelf: PropTypes.string,
    changeShelf: PropTypes.func
}

export default BookShelf
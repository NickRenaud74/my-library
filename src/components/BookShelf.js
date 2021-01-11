import React from 'react'
import Book from './Book'
import AddBooks from './AddBooks'

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

export default BookShelf
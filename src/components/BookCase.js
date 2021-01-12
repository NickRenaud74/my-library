import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function BookCase({sortShelf, changeShelf}) {
    
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Library</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf
                        books={sortShelf('currentlyReading')}
                        shelf={'Currently Reading'}
                        changeShelf={changeShelf}
                    />
                    <BookShelf
                        books={sortShelf('wantToRead')}
                        shelf={'Want To Read'}
                        changeShelf={changeShelf}
                    />
                    <BookShelf
                        books={sortShelf('read')}
                        shelf={'Read'}
                        changeShelf={changeShelf}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to='/search' >
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}

BookCase.propTypes = {
    sortShelf: PropTypes.func,
    changeShelf: PropTypes.func
}

export default BookCase
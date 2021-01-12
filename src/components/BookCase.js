import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function BookCase({sortShelf, changeShelf}) {
    
    const shelves = [
        {
          title: 'Currently Reading',
          id: 'currentlyReading'
        },
        {
          title: 'Want To Read',
          id: 'wantToRead'
        },
        {
          title: 'Read',
          id: 'read'
        }
      ];

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Library</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves.map(shelf => (
                        <BookShelf
                            key={shelf.id}
                            books={sortShelf(shelf.id)}
                            shelf={shelf.title}
                            changeShelf={changeShelf}
                        />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>
                    <button>Add Book</button>
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
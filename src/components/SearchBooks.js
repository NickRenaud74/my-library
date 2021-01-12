import React, {useState} from 'react';
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchBooks({ booksOnShelf, changeShelf }) {
    
    const [query, setQuery] = useState('')
    const [booksFound, setBooksFound] = useState([])

    function handleSearch(e) {
        const search = e.target.value
        setQuery(search)

        if (search.length) {
            BooksAPI.search(search)
            .then(books => {
                books.error ? setBooksFound([]) : assignShelf(books)
            })   
        } else {
            setQuery('')
            setBooksFound([])
        }
    }

    function assignShelf(searchBooks) {
        const books =
            searchBooks.map(book => {
                const getBook = booksOnShelf.some(b => b.id === book.id)
                getBook ? book.shelf = getBook.shelf : book.shelf = 'none'
                return book;
            })
        console.log(books)
        setBooksFound(books)
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' >
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {booksFound.map(book => <Book book={book} changeShelf={changeShelf} />)}
                </ol>
            </div>
        </div>

    )
}

SearchBooks.propTypes = {
    booksOnShelf: PropTypes.array,
    changeShelf: PropTypes.func
}

export default SearchBooks;
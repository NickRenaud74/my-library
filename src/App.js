import React, {useState, useEffect} from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import SearchBooks from './components/SearchBooks';
import BookCase from './components/BookCase';
import { Switch, Route } from 'react-router-dom';


function BooksApp() {
  const [booksOnShelf, setBooksOnShelf] = useState([])

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => setBooksOnShelf(books))
  }, [])

  function sortShelf(shelf) {
    return booksOnShelf.filter(b => b.shelf === shelf)
  }

  function changeShelf(book, shelf) {
    BooksAPI.update(book, shelf)
    
    if (shelf === 'none') {
        setBooksOnShelf(prevBooks => prevBooks.filter(b=> b.id !== book.id))
    } else {
        book.shelf = shelf;
        setBooksOnShelf(prevBooks => prevBooks.filter(b => b.id !== book.id).concat(book))
    }
}
  return (
    <div className='app'>
      <Switch>
        <Route path='/search'>
          <SearchBooks booksOnShelf={booksOnShelf} changeShelf={changeShelf}/>
        </Route>

        <Route exact path='/' >
          <BookCase
            sortShelf={sortShelf}
            changeShelf={changeShelf}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default BooksApp;
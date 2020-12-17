import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import { Container } from 'reactstrap';
import SearchBooks from './components/SearchBooks';
import BookCase from './components/BookCase';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books: books })
      })
  }

  render() {

    return (
        <div className='app'>
          <h1 className='app-title'>My Library</h1>
          <Route path='/search' render={() => (
            <SearchBooks />
          )} />

          <Route exact path='/' render={() => (
            <BookCase
              books={this.state.books}
            />
          )} />
        
        </div>
    )
  }
}

export default BooksApp;

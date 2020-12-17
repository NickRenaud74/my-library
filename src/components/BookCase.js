import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

class BookCase extends React.Component {
    render() {
        return (
            <div>
                <h1>BookCase</h1>
                <ol>
                    {this.props.books.map(book => {
                        return <li>{book.title}</li>
                    })}
                </ol>

                <Link to='/search' >
                    <Button color='info' size='lg' className='open-search'>
                        <FontAwesomeIcon icon={faPlusSquare} size='2x' />
                    </Button>
                </Link>
            </div>

        )
    }
}

export default BookCase;
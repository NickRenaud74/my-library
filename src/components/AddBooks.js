import React from 'react'
import {Link} from 'react-router-dom'

function AddBooks() {
    return (
        <div className="add-books-shelf">
            <h4 className="add-books">Add Books To This Shelf</h4>
            <div className="to-search">
                <Link to='/search' >
                    <button></button>
                </Link>
            </div>
        </div>

    )
}

export default AddBooks
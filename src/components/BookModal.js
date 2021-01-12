import React from 'react'
import PropTypes from 'prop-types'

function BookModal({ book, closeModal}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-modal" onClick={() => closeModal()}>×</span>

                <div className="modal-header">
                    <h2 className="modal-book-title">{book.title}</h2>
                    <h4 className="modal-book-authors">{book.authors ? book.authors.join(' & ') : ''}</h4>
                </div>
                <div className="modal-body">
                    <div className="modal-book-cover">
                        <div className="book-cover"
                            style={{
                                width: 220,
                                height: 290,
                                backgroundImage: book.imageLinks ?
                                    `url(${book.imageLinks.thumbnail})` : '',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                        </div>
                    </div>

                    <div className="modal-book-info">
                        <p className="book-description">{book.description}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

BookModal.propTypes = {
    book: PropTypes.object,
    closeModal: PropTypes.func
}

export default BookModal
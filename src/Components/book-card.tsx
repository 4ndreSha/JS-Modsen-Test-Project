import React from 'react'
import { Link } from 'react-router-dom';

function BookCard() {
    return <>
        <div class="book-card">
            <div class="book-card__image">book image</div>
            <div class="book-card__info">
                <div class="book-card__category">category</div>
                <Link class="link" to="/book">
                    <div class="book-card__name">
                        Book name that is veeery very dhgasjdgaksjhdgajkhsg
                    </div>
                </Link>
                <div class="book-card__author">author</div>
            </div>
        </div>
    </>
}

export default BookCard;
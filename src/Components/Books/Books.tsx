import React from 'react'
import BookCard from '../BookCard/BookCard';

var numberOfResults = 10;

function Books() {
    return <>
        <section class="books">
            <div class="books-found">Found {numberOfResults} results</div>
            <div class="book-card__collection">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </section>
    </>
}

export default Books;

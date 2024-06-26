import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'


const key = "AIzaSyDiXSqDNIa5NHW-DtE-4v6b_elG8lpESh8";

async function getBookData() {
    var result;
    var userInfo = await fetch(`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${key}`)
    .then(response => {
        result = response.json();
        return result
    })
    .then(response => console.log(JSON.stringify(response)))
    return result
}

function BookCard() {
    //var bookData = getBookData();
    //console.log(JSON.stringify(getBookData(), null, 3));
    return <>
        <div class="book-card">
            <div class="book-card__image">book image</div>
            <div class="book-card__info">
                <div class="book-card__category">category</div>
                <Link class="link" to="/book">
                    <div class="book-card__name">
                        Book name that is veeeery looong
                    </div>
                </Link>
                <div class="book-card__author">author</div>
            </div>
        </div>
    </>
}

export default BookCard;
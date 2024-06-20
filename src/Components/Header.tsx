import React from 'react'

function Header() {
    return <>
        <header>
            <h1 class="header-text">Search for books</h1>
            <div class="header-options">
                <div class="options-search">
                    <input type="text" placeholder="What do you want?"/>
                    <i class="search-icon" aria-hidden="true"></i>
                </div>
                <div class="options-filters">
                    <div class="filters-categories">
                        <span class="filters-categories__text">Categories</span>
                        <select id="book-categories">
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </div>
                    
                    <div class="filters-sortby">
                        <span class="filters-sortby__text">Sorting by</span>
                        <select id="book-sortby">
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
        </>
}

export default Header;

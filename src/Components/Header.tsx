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
                            <option value="programming">programming</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    
                    <div class="filters-sortby">
                        <span class="filters-sortby__text">Sorting by</span>
                        <select id="book-sortby">
                            <option value="relevance">relevance</option>
                            <option value="date">date</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
        </>
}

export default Header;

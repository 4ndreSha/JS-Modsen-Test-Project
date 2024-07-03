import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Header() {
  const handleInputChange = () => {
    let i = 'a';
  }
  return (
    <>
      <header>
        <h1 class='header-text'>
          <Link class='link' to='/'>
            Search for books
          </Link>
        </h1>
        <div class='header-options'>
          <div class='options-search'>
            <input type='text' id='search-field' placeholder='What do you want?' onChange={handleInputChange} />
            <i class='search-icon' aria-hidden='true'></i>
          </div>
          <div class='options-filters'>
            <div class='filters-categories'>
              <span class='filters-categories__text'>Categories</span>
              <select id='book-categories'>
                <option value='all'>all</option>
                <option value='art'>art</option>
                <option value='biography'>biography</option>
                <option value='computers'>computers</option>
                <option value='history'>history</option>
                <option value='medical'>medical</option>
                <option value='poetry'>poetry</option>
              </select>
            </div>

            <div class='filters-sortby'>
              <span class='filters-sortby__text'>Sorting by</span>
              <select id='book-sortby'>
                <option value='relevance'>relevance</option>
                <option value='newest'>newest</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

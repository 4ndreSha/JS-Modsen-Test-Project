import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {useState, useEffect, useCallback} from 'react';
import Selector from '../Selector';
import {useNavigate} from "react-router-dom";

function Header({ onChange, followLink = false, localForm = null}) {
  const [book, setBook] = useState([]);
  const [form, setForm] = useState({title: 'mem', subject: 'all', sorting: 'relevance'});
  const navigate = useNavigate();

  const handleInputChange = (key: string, value) => {
    setForm({ ...form, [key]: value});
  }

  const sendForm = () => {
    if(followLink = true)
      navigate("/");
    else
      onChange(form);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendForm();
    }
  }

  const categoryItems = [
    { value: 'all', label: 'all' },
    { value: 'art', label: 'art' },
    { value: 'biography', label: 'biography' },
    { value: 'computers', label: 'computers' },
    { value: 'history', label: 'history' },
    { value: 'medical', label: 'medical' },
    { value: 'poetry', label: 'poetry' },
  ];

  const sortingItems = [
    { value: 'relevance', label: 'relevance' },
    { value: 'newest', label: 'newest' },
  ];

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
            <input
              type='text' id='search-field' placeholder='What do you want?' 
              onChange={(event) => handleInputChange("title", event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <i class='search-icon' aria-hidden='true' onClick={sendForm} />
          </div>
          <div class='options-filters'>
            <div class='filters-categories'>
              <span class='filters-categories__text'>Categories</span>
              <Selector class="book-categories" items={categoryItems} onChange={(value) => handleInputChange('subject', value)}/>
            </div>

            <div class='filters-sortby'>
              <span class='filters-sortby__text'>Sorting by</span>
              <Selector class="book-sortby" items={sortingItems} onChange={(value) => handleInputChange('sorting', value)}/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

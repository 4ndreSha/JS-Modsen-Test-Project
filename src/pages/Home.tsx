import React from 'react';
import Books from '../components/Books/Books';
import Header from '../components/Header/Header';
import {useState, useEffect, useCallback} from 'react';

function Home() {
  const [form, setForm] = useState({title: 'mem', subject: 'all', sorting: 'relevance'});

  const handleFormChange = (form) => {
    setForm(form);
  } 
  
  return (
    <>
      <Header onChange={handleFormChange}/>
      <Books form={form}/>
    </>
  );
}

export default Home;

import React from 'react';
import {Link} from 'react-router-dom';

function Selector({items, onChange}) {
  const handleOptionChange = (event) => {
    onChange(event.target.value);
  }
  return (
    <>
        <select onChange={handleOptionChange}>
            {items.map(item => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    </>
  );
}

export default Selector;
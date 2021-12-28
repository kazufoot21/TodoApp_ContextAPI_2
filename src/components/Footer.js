import React, { useContext } from 'react';
import { DataContext } from './DataProvider';

export const Footer = () => {
  const [todos, setTodos] = useContext(DataContext);
  return (
    <div className="row">
      <label htmlFor="all" name="all" id="all">
        <input type="checkbox" />
        All
      </label>
      <p>last To dos 0</p>
      <button id="delete">Delete</button>
    </div>
  );
};

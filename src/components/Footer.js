import React from 'react';

export const Footer = () => {
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

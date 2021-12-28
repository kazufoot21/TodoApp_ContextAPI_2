import React from 'react';

export const FormInput = () => {
  return (
    <form>
      <label autocomplete="off">
        <input
          type="text"
          name="todos"
          id="todos"
          placeholder="Add Your To Do List"
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

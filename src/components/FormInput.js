import React, { useContext, useState } from 'react';
import { DataContext } from './DataProvider';

export const FormInput = () => {
  const [todos, setTodos] = useContext(DataContext);

  const [todoName, setTodoName] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, completed: false }]);
    setTodoName('');
  };

  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <label>
        <input
          type="text"
          name="todos"
          id="todos"
          placeholder="Add Your To Do List"
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value.toLocaleLowerCase());
          }}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};

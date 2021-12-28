import React, { useContext } from 'react';
import { DataContext } from './DataProvider';
import { ListItem } from './ListItem';

export const List = () => {
  const [todos, setTodos] = useContext(DataContext);

  const swithComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <ListItem
          todo={todo}
          key={index}
          id={index}
          checkedComplete={swithComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
};

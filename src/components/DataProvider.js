import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const { children } = props;
  const [todos, setTodos] = useState;
  return (
    <DataContext.Provider value={(todos, setTodos)}>
      {children}
    </DataContext.Provider>
  );
};

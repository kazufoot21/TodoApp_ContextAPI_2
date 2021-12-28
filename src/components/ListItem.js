import React, { useState } from 'react';

export const ListItem = (props) => {
  const { todo, id, checkedComplete, handleEditTodos } = props;
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const hanldleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          name="editValue"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value.toLocaleLowerCase())}
        />
        {todo.name}
        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? 'active' : ''}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkedComplete(id)}
          />
          {todo.name}
        </label>
        <button disabled={todo.complete} onClick={hanldleOnEdit}>
          edit
        </button>
      </li>
    );
  }
};

import './App.css';

function App() {
  return (
    <>
      <h1>To Do List</h1>

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

      <ul>
        <li>
          <label htmlFor className>
            <input type="checkbox" id />
          </label>
          <button>edit</button>
        </li>
        <li>
          <label htmlFor className>
            <input type="checkbox" id />
          </label>
          <button>edit</button>
        </li>
      </ul>

      <div className="row">
        <label htmlFor="all" name="all" id="all">
          <input type="checkbox" />
          All
        </label>
        <p>last To dos 0</p>
        <button id="delete">delete</button>
      </div>
    </>
  );
}

export default App;

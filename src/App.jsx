import { useState } from "react";
import { Typography } from "@mui/material";

function App() {
  const [todos, setTodos] = useState(["Item 1", "Item 2"]);
  const [values, setValues] = useState("");
  const [completed, setCompleted] = useState([]);

  const removeItems = (id) => {
    setTodos(todos.filter((item, index) => index !== id));
  };

  const completedItems = (id) => {
    setCompleted(todos.map((item, index) => index !== id));
  };

  return (
    <div>
      <Typography variant="h1">Todo List : </Typography>
      <Typography variant="h2">Add Item : </Typography>
      <input
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <button
        onClick={() => {
          setTodos([...todos, values]);
          setValues("");
        }}
      >
        Add
      </button>

      <select name="" id="">
        <option value="completed">Incomplete Tasks</option>
        <option value="not-completed">Completed</option>
      </select>

      {todos.map((todosItem, index) => (
        <>
          <li key={index}>{todosItem}</li>
          <input type="checkbox" onClick={() => completedItems(index)} />
          <label htmlFor="">Mark as Complete</label>
          <button onClick={() => removeItems(index)}>Delete</button>
        </>
      ))}
    </div>
  );
}

export default App;

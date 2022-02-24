import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";

const App = () => {
  const [todoList, setTodoLists] = useState([]);

  return (
    <div>
      <Login />
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import CreateTask from "./Components/CreateTask";
import TaskContainer from "./Components/TaskContainer";
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

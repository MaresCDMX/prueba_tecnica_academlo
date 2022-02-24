import axios from "axios";
import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";

const TaskContainer = ({ token }) => {
  const [tasks, setTasks] = useState();
  const [allTasks, setAllTasks] = useState();

  const handler = (valorDelInput) => {
    console.log("Valor del input:", valorDelInput);
    //  const array = [1,2,3,4]
    //setTodoLists([...todoList, valorDelInput]);
  };

  // Get Method
  useEffect(() => {
    axios
      .get("https://tasks-crud.academlo.com/api/tasks", token, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setTasks(res.data.tasks);
      });
  }, []);

  useEffect(() => {
    if (tasks) {
      const arrayTasks = tasks.map((value) => (
        <TaskItem task={value.task} description={value.student} />
      ));
      setAllTasks(arrayTasks);
    }
  }, [tasks]);

  return (
    <>
      <CreateTask className="font-face-gm" handleCreateTask={handler} />
      <div className="gallery">
        {allTasks === null ? "loading tasks..." : allTasks}
      </div>
    </>
  );
};

export default TaskContainer;

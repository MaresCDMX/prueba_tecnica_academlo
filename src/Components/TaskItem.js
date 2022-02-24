import React from "react";

const TaskItem = ({ task, description }) => {
  return (
    <div className="card">
      <label> by {task} </label>
      <label> by {description} </label>
    </div>
  );
};

export default TaskItem;

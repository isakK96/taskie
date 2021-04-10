import React from "react";
import Task from "./Task.js";

const TaskList = ({ tasks, removeTask, completeTask }) => {
  return (
    <div className="taskContainer">
      <ul>
        {tasks.map((task, index) => (
          <li className="border-b py-4 border-light-LightGrayishBlue">
            <Task
              key={task}
              index={index}
              task={task}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TaskList as default };

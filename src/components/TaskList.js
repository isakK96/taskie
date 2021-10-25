import React from "react";
import Task from "./Task.js";

const TaskList = ({ tasks, removeTask, completeTask }) => {
  return (
    <div className="taskContainer shadow-2xl">
      <ul>
        {tasks.map((task, index) => (
          <li
            onClick={() => completeTask(index)}
            className={
              task.taskComplete
                ? "bg-light-BrightBlue bg-opacity-25 border-b py-4 border-light-LightGrayishBlue cursor-pointer"
                : "border-b py-4 border-light-LightGrayishBlue cursor-pointer"
            }
          >
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

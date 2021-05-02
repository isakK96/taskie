import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const Task = ({ task, index, removeTask, completeTask }) => {
  return (
    <div className="text-lg mx-4 text-light-VeryDarkGrayishBlue flex justify-between text-right">
      <button
        onClick={() => completeTask(index)}
        className={
          task.taskComplete
            ? "focus:outline-none w-9 h-9 border-2 text-2xl text-white border-light-BrightBlue rounded-full bg-gradients-b bg-gradient-to-br to-gradients-a"
            : "focus:outline-none w-9 h-9 border-2 text-2xl text-dark-LightGrayishBlue text-opacity-0 border-light-DarkGrayishBlue rounded-full transition-colors hover:bg-light-LightGrayishBlue"
        }
      >
        <FaCheck className="mx-auto my-auto text-sm" />
      </button>
      <div
        className={
          "dark:text-dark-LightGrayishBlue " +
          (task.taskComplete ? "text-2xl opacity-50 line-through" : "text-2xl")
        }
      >
        {task.task}
      </div>
      <button
        onClick={() => removeTask(task)}
        className="dark:text-dark-LightGrayishBlue opacity-40 hover:opacity-100"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export { Task as default };

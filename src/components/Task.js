import React from "react";

const Task = ({ task, index, removeTask, completeTask }) => {
  return (
    <div className="text-lg mx-4 text-light-VeryDarkGrayishBlue flex justify-between text-right">
      <button onClick={() => completeTask(index)} className="">
        O
      </button>
      <div
        className={
          task.taskComplete ? "text-2xl opacity-50 line-through" : "text-2xl"
        }
      >
        {task.task}
      </div>
      <button onClick={() => removeTask(task)} className="">
        X
      </button>
    </div>
  );
};

export { Task as default };

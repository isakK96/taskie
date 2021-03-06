import React from 'react'

const Task = ({ task, removeTask }) => {
  return (
    <div className="text-lg mx-4 text-light-VeryDarkGrayishBlue flex justify-between text-right">
      {task}
      <button onClick={() => removeTask(task)} className="">X</button>
    </div>
  );
};

export { Task as default };
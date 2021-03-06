import React from 'react'
import Task from './Task.js'

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div className="taskContainer">
      <ul>
        {tasks.map((task) => ( 
          <li className="border-b py-4 border-light-LightGrayishBlue">
            <Task key={task} task={task} removeTask={removeTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TaskList as default};
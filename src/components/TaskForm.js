import React, { useState } from 'react'

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task} onChange={(e) => setTask(e.target.value)}
        className="p-4 text-2xl rounded-md w-full shadow-md focus:outline-none"
        placeholder="Add a new task" />
      
    </form>
  )
}

export { TaskForm as default};
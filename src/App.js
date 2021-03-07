import React, { useState, useEffect } from 'react'
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const removeTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => taskToDelete !== task));
  }

  // Load any existing tasks
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      setTasks(tasks);
    }
  }, []);

  // Save the current tasks to localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="bg-light-VeryLightGray h-screen">
      <div className="bg-top bg-gradient-to-r from-gradients-b to-gradients-a max-h-60">
        <div id="mainContainer" className="mx-5 md:w-8/12 md:mx-auto max-w-screen-lg">
          <h1 className="pt-10 mb-4 text-left text-4xl tracking-widest font-bold text-light-VeryLightGray">TASKIE</h1>
          <div>
            <TaskForm addTask={addTask} />
          </div>
          <div id="taskList" className="bg-white mt-10 max-h-screen rounded-md shadow-md">
            <TaskList tasks={tasks} removeTask={removeTask} />
          </div>
          <div id="bottomMenu" className="flex justify-between">
            <p className="text-light-DarkGrayishBlue">{tasks.length} tasks left</p>
            <div id="taskFilters" className="">

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

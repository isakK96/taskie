import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (task) => {
    const newTask = [...tasks, { task, taskComplete: false }];
    setTasks(newTask);
  };

  const removeTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => taskToDelete !== task));
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].taskComplete = !newTasks[index].taskComplete;
    setTasks(newTasks);
  };

  const countCompleted = () => {
    const result = tasks.filter(
      ({ taskComplete }) => taskComplete === false
    ).length;
    return result === 1
      ? result + " task remaining"
      : result + " tasks remaining";
  };

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
    <div className={darkMode ? "dark" : ""}>
      <div
        className={"bg-light-VeryLightGray dark:bg-dark-VeryDarkBlue h-screen"}
      >
        <div className="bg-top bg-gradient-to-r from-gradients-b to-gradients-a max-h-60">
          <div
            id="mainContainer"
            className="mx-5 md:w-6/12 md:mx-auto max-w-screen-lg"
          >
            <div className="flex flex-row justify-between items-baseline">
              <h1 className="pt-10 mb-4 text-left text-4xl tracking-widest font-extrabold text-light-VeryLightGray">
                TASKIE
              </h1>
              <button
                className="rounded-full p-1 border border-light-VeryLightGray border-opacity-50 focus:outline-none"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <FaSun className="text-white text-2xl" />
                ) : (
                  <FaMoon className="text-white text-2xl" />
                )}
              </button>
            </div>
            <div>
              <TaskForm addTask={addTask} />
            </div>
            <div
              id="taskList"
              className="bg-white dark:bg-dark-VeryDarkDesaturatedBlue mt-10 max-h-screen rounded-md shadow-md"
            >
              <TaskList
                tasks={tasks}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            </div>
            <div id="bottomMenu" className="flex justify-between mt-4">
              <p className="text-light-DarkGrayishBlue">{countCompleted()}</p>
              <div id="taskFilters" className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

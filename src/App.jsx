import React, { useState, useEffect } from 'react'
import "./App.css"
import TaskForm from './assets/Components/TaskForm'
import TaskColumn from './assets/Components/TaskColumn'

import TodoIcon from './assets/direct-hit.svg'
import DoingIcon from './assets/glowing-star.svg'
import DoneIcon from './assets/check-mark.svg'

const oldTasks = localStorage.getItem("tasks") 
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const handleDelete = (taskindex) => {
    const newtask = tasks.filter((task, index) => index !== taskindex)
    setTasks(newtask)
  }
  // console.log("tasks", tasks);

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="To Do"
          icon={TodoIcon}
          tasks={tasks}
          handleDelete={handleDelete}
          status='todo' />

        <TaskColumn title="Doing"
          icon={DoingIcon}
          tasks={tasks}
          handleDelete={handleDelete}
          status='doing' />

        <TaskColumn title="Done"
          icon={DoneIcon}
          handleDelete={handleDelete}
          tasks={tasks}
          status='done' />

      </main>
    </div>
  )
}

export default App
import { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './componants/Header'
import Tasks from './componants/Tasks'
import AddTask from './componants/AddTask'
import Footer from './componants/Footer'
import About from './componants/About'

import { fetchTask, fetchTasks, editTask } from './actions/tasks'

const App = ({ fetchTasks, fetchTask, task, tasks }) => {
  // use state hook and holidng it as app level state
  const [showAddTask, setShowAddTask] = useState(false)
  // const [tasks, setTasks] = useState([])

  useEffect(() => {
    // const getTasks = async () => {
    //   const serverTasks = await fetchTasks()
    //   setTasks(serverTasks)
    // }

    // getTasks()
    fetchTasks()

  }, [fetchTasks])

  // const random = async () => {
  //   await fetchTasks()
  // }


  // // Fetch Tasks
  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks")
  //   const data = await res.json()

  //   return data
  // }

  // // Fetch Task
  // const fetchTask = async(id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()

  //   return data
  // }
  
  // Add Task
  // const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   })

  //   const data = await res.json()

  //   setTasks([...tasks, data])

  //   // const id = Math.floor(Math.random() * 10000) + 1
  //   // const newTask = { id, ...task }
  //   // setTasks([...tasks, newTask])
  // }

  // Delete Task
  // const deleteTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'DELETE',
  //   })
  //   //We should control the response status to decide if we will change the state or not.
  //   res.status === 200
  //     ? setTasks(tasks.filter((task) => task.id !== id))
  //     : alert('Error Deleting This Task')

  //   //setTasks(tasks.filter((task) => task.id !== id))
  // }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    await fetchTask(id)
    editTask(id, { ...task, reminder: !task.reminder})
    // const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(updTask),
    // })

    // const data = await res.json()

    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, reminder: data.reminder } : task
    //   )
    // )

    // setTasks(
    //   tasks.map( (task) =>
    //     task.id === id ?
    //     {...task, reminder: !task.reminder } :
    //     task
    //   )
    // )
  }
  
  return (
    <Router>
      <div className="container">
        <Header toggleAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route
            path='/'
            element={
              <Fragment>
                { showAddTask && <AddTask /> }
                { tasks.length > 0 ? 
                <Tasks
                  tasks={tasks}
                  onToggle={toggleReminder}
                /> :
                'No tasks to show'}
              </Fragment>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const mapStatetoProps = state => ({
  task : state.tasks.task,
  tasks : state.tasks.tasks
})

export default connect(mapStatetoProps, { fetchTasks, fetchTask, editTask })(App);

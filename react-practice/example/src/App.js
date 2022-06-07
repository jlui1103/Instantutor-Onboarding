import { useState } from 'react'
import Header from './componants/Header'
import Tasks from './componants/Tasks'
import AddTask from './componants/AddTask'

const sample_tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at School",
    day: "Feb 6th at 1:30pm",
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
  }
]

const App = () => {
  // use state hook and holidng it as app level state
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(sample_tasks)
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map( (task) =>
        task.id === id ?
        {...task, reminder: !task.reminder } :
        task
      )
    )
  }
  
  return (
    // can also use <> </> to wrap around
    <div className="container">
      <Header toggleAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { tasks.length > 0 ? 
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      /> :
      'No tasks to show'}
    </div>
  );
}

export default App;

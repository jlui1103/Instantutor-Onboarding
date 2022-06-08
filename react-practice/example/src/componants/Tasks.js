import Task from './Task'
import { connect } from 'react-redux'
import { deleteTask } from '../actions/tasks'

const Tasks = ({tasks, deleteTask : onDelete, onToggle}) => {

  // using a list with a key prop
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default connect(null, { deleteTask })(Tasks)
import { FaTimes } from 'react-icons/fa'
import { connect } from 'react-redux'
import { editTask } from '../actions/tasks'

const Task = ({ task, onDelete, onToggle, editTask }) => {
  return (
    <div
    className={`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick={ () => editTask(task.id, { ...task , reminder: !task.reminder })}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default connect(null, { editTask })(Task)

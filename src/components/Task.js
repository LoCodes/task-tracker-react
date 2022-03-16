import { FaTimes } from 'react-icons/fa' // X icon for deleting

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3 > {task.text}{' '}
        <FaTimes style={{
            color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.id)}/>   
        </h3>
        <p> {task.dateTime} </p>

    </div>
  )
}

export default Task

// create a singular Task component for my tasks.  
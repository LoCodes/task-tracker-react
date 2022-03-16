import { FaTimes } from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className='task'>
        <h3 > {task.text} <FaTimes style={{color: 'red', cursor: 'pointer'}} /> 
        </h3>
        <p> {task.dateTime} </p>

    </div>
  )
}

export default Task

// create a singular Task component for my tasks. 
const Task = ({task}) => {
  return (
    <div className='task' >
        <h3> {task.text} </h3>
        <p> {task.dateTime} </p>
    </div>
  )
}

export default Task

// create a singular Task component for my tasks. 
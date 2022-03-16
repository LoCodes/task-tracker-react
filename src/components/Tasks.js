// import { useState } from "react"
import Task from "./Task"

// state is immutable === cannot be directly changed. 

const Tasks = ({tasks, onDelete}) => {
  return (
    <>Tasks
        {tasks.map((task) => ( 
            <Task key={task.id} task={task} onDelete={onDelete} >       
            </Task>  
        ))}
    </>
  )
}

export default Tasks
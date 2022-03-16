// import { useState } from "react"
import Task from "./Task"

// state is immutable === cannot be directly changed. 

const Tasks = ({tasks}) => {
  return (
    <>Tasks
        {tasks.map((task) => ( 
            <Task key={task.id} task={task} >       
            </Task>  
        ))}
    </>
  )
}

export default Tasks
// import { useState } from "react"

// state is immutable === cannot be directly changed. 

const Tasks = ({tasks}) => {
  return (
   

    <>Tasks
        {tasks.map((task) => ( 
            <h3 key={task.id} >
                {task.text}
            </h3>  
        ))}


    </>

  )
}

export default Tasks
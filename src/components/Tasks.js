import { useState } from "react"


// const tasks = [
//     {
//         id: 1, 
//         text: 'Interview with Tomorrow Health',
//         dateTime: 'March 15th, 2022 at 1:40pm',
//         reminder: true

//     },
//     {
//         id: 2, 
//         text: 'Get off at 6pm or later',
//         dateTime: 'March 15th, 2022',
//         reminder: false

//     },
//     {
//         id: 3, 
//         text: 'This is dummy data',
//         dateTime: 'March 15th, 2022 at 3:21pm',
//         reminder: true

//     }
// ]

// state is immutable === cannot be directly changed. 

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1, 
            text: 'Interview with Tomorrow Health',
            dateTime: 'March 15th, 2022 at 1:40pm',
            reminder: true
    
        },
        {
            id: 2, 
            text: 'Get off at 6pm or later',
            dateTime: 'March 15th, 2022',
            reminder: false
    
        },
        {
            id: 3, 
            text: 'This is dummy data',
            dateTime: 'March 15th, 2022 at 3:21pm',
            reminder: true
    
        }
    ]) 

  return (
    // to edit tasks like this because state is immutable 

    // setTasks([...tasks], {})
            // spread then add 


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
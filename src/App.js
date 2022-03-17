// import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  // const name = 'Loren'
  // const x = false
  
  const [tasks, setTasks] = useState([

    // usually want data in redux or context api 
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
  
  // Add Task 

  const addTask = (task) => {
    // using random number since there's no backend 
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTask = {id, ...task} // add task with the id
    setTasks([...tasks, newTask]) // add new task to existing tasks 
  }

  const deleteTask = (id) => { 
     setTasks(tasks.filter((task) => task.id !== id)) // setSomething how to deal with mutable state
  }

  // Toggle Reminder  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
     // to edit tasks like this because state is immutable 

    // setTasks([...tasks], {})
            // spread then add 

    <div className='container'>
     <Header />
     <AddTask onAdd={addTask}/> 
     
     {tasks.length > 0 ? 
     <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}



    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1> Hello from class </h1>
//   }
// }

export default App;

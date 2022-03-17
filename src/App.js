// import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
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
     <Header 
     onAdd={()=> setShowAddTask(!showAddTask)} 
     showAdd={showAddTask}
     />
    { showAddTask && <AddTask onAdd={addTask}/> }
     
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

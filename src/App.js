import { useState, useEffect   } from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"; 
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import TaskDetails from './components/TaskDetails';



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json() 
    return data 
  }
  
  // Add Task 
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', 
      }, 
      body: JSON.stringify(task),
    })

    const data = await res.json() // a promise so make sure to await res.json()

    setTasks([...tasks, data])

    // // using random number if there's no backend 
    // const id = Math.floor(Math.random() * 10000) + 1 
    // const newTask = {id, ...task} // add task with the id
    // setTasks([...tasks, newTask]) // add new task to existing tasks 
  }

  // Delete Task
  const deleteTask = async (id) => { 
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id)) // setSomething how to deal with mutable state
  }

  

  // Toggle Reminder  

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id) // getting task
    const updateTask = {...taskToToggle, 
      reminder: !taskToToggle.reminder } // creating a new task

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', 
      }, 
      body: JSON.stringify(updateTask)
    })
 
    const data = await res.json() // a promise so make sure to await res.json()

    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: 
          data.reminder } : task
      )
    )
  }

  return (
     // to edit tasks like this because state is immutable 

    // setTasks([...tasks], {})
            // spread then add 
    <Router> 
    <div className='container'>
     <Header 
     onAdd={()=> setShowAddTask(!showAddTask)} 
     showAdd={showAddTask}
     />
     <Routes> 
      <Route 
        path='/' 
        element={
        <>
        { showAddTask && <AddTask onAdd={addTask}/> }
        {tasks.length > 0 ? 
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}/> : 'No Tasks'}      
          </>
        } 
      />
     <Route path="/about" element={<About/>} />
     <Route path="/task/:id" element={<TaskDetails/>} />
     </Routes>
     <Footer />
    </div>
    </Router>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1> Hello from class </h1>
//   }
// }

export default App;

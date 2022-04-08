import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
   
   const TaskDetails = () => {
       const [loading, setLoading] = useState(true)
       const [task, setTask] = useState({})
       const [error, setError] = useState(null)

       const params = useParams() // params === id in the url
       
        useEffect(() => {
            const fetchTask = async () => {
                const res = await fetch(`http://localhost:5000/tasks/${params.id}`)
                const data = await res.json()  
              
                if (res.status === 404){
                    setError("task not found") 
                }

                setTask(data)
                setLoading(false)
            }
            fetchTask()
        })
        
        if(error){
            return <Navigate to='/' />
        }
        
        return loading ? ( 
            <h3>Loading... </h3>
            ) : (
                
            <div>
                <h3> {task.text}</h3>
                <p>{task.dateTime} </p>
                <p>{task.details}</p>
            </div>
        )
   }
   
   export default TaskDetails
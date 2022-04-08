import { useState } from "react"

const AddTask = ({onAdd}) => {
    // component level state 
    const [text, setText] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [reminder, setReminder] = useState(false)
    const [details, setDetails] = useState('')

    //onChange on controlled component 

    // submit form 
    const onSubmit = (e) => {
        e.preventDefault() 
        
        if(!text){
            alert('Please add task')
        }
        
        onAdd({text, dateTime, reminder, details})

        //clear text 
        setText('')
        setDateTime('')
        setReminder(false)
        setDetails('')

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'> 
            <label> Task </label>
            <input type='text' placeholder='Add Task' value={text} 
            onChange={(e)=>setText(e.target.value)}/> 
        </div>
        <div className='form-control'> 
            <label> Day & Time </label>
            <input type='text' placeholder='Add Day & Time' value={dateTime} 
            onChange={(e)=>setDateTime(e.target.value)}/> 
        </div>
        <div className='form-control'>
            <label> Details </label>
            <input type='text' placeholder="Add Deatails" value={details} 
            onChange={(e)=>setDetails(e.target.value)}/>


        </div>
        <div className='form-control form-control-check' > 
            <label> Set Reminder </label>
            <input 
            type='checkbox'
            checked={reminder} 
            value={reminder} 
            onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' 
        className='btn btn-block' /> 
    </form>
  ) 
}

export default AddTask
import { useState } from "react"

const AddTask = () => {
    // component level state 
    const [text, setText] = useState('')
    const [dateTime, setDateTime] = useState('')
    const [reminder, setReminder] = useState(false)

    //onChange on controlled component 

  return (
    <form className='add-form'>
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
        <div className='form-control form-control-check' > 
            <label> Set Reminder </label>
            <input type='checkbox' value={reminder} 
            onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Save Task' 
        className='btn btn-block' /> 
    </form>
  ) 
}

export default AddTask
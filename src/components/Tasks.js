const tasks = [
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
]

const Tasks = () => {
  return (
    <>Tasks
        {tasks.map(() => ( 
            <h3>
                {tasks.text}
            </h3>  
        ))}


    </>

  )
}

export default Tasks
import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Walk Dog',
            day: 'Feb 7th at 3:45pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Walk Panther',
            day: 'Feb 7th at 5:45pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Walk Gorilla',
            day: 'Feb 8th at 12:45am',
            reminder: false,
        },
    ])

    
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks

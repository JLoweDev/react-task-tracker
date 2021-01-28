import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('pork', id);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='React Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;

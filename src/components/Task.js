import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task'>
            <h3 onDoubleClick={() => onToggle(task.id)}>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

export function TaskCard({ task} ) {
const {deleteTask} = useContext(TaskContext)

  return (
    <div className='bg-gray-800 p-4 rounded-md text-white'>
        <h2 className='text-xl font-bold capitalize'>{task.title}</h2>
        <p className='text-gray-500 text-sm'>{task.body}</p>
        <button className ='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>Delete</button>

    </div>
  )
}



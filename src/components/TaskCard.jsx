import React from 'react';
import {useTasks} from '../context/TaskContext';
import { Link } from 'react-router-dom';
// import { dayjs } from 'dayjs';

function TaskCard({task}) {
    const {deleteTask} = useTasks();
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            <header className='flex justify-between '>
                <h1 className='text-2xl font-bold'>{task.title}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button onClick={()=>{
                        // console.log(task._id)
                        deleteTask(task._id)
                    }}>Delete</button>
                    <Link to={`/task/${task._id}`}>Edit</Link>
                </div>
            </header>
            <p className='text-slate-300'>{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>

            {/* <p>
              {
                dayjs(task.date).utc().format('DD/MM/YYYY')
              }
            </p> */}
          </div>
  )
}

export default TaskCard
import React, { useEffect } from 'react'
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';


function TasksPage() {
  
  const { tasks,  getTasks} = useTasks();

  useEffect(()=>{
    getTasks();
  },[]);

  if(tasks.lenght == 0) return 'No tasks available';

  return (
    <div className='grid ms:grid-cols-2 md:grid-cols-3 gap-2'>
      {
        tasks.map((task) =>(
          <TaskCard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TasksPage
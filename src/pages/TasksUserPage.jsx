import React, { useEffect } from 'react'
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import {  useParams } from "react-router-dom";
import {  useAuth } from "../context/AuthContex";

function TasksUserPage() {
    const { tasks,  getTasksByUSer} = useTasks();
    const params = useParams();
    //traemos el id del usuario
    const id = params.id;
    //traemos el usuario de useAuth
    const { user } = useAuth();
    //validamos si el usuario es el mismo que el id del usuario
    
    useEffect(()=>{
        if(user.id === id){
            getTasksByUSer(id);
        }
    }, [user.id, id]);



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

export default TasksUserPage
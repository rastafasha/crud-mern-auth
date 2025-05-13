import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContex.jsx';

function NavBar() {
    const {isAuthenticated, logout, user} = useAuth();
  return (
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
        <Link to='/'>
            <h1 className='text-2xl font-bold'>Task Manager</h1>
        </Link>
        <ul className='flex gap-x-2'>
            {isAuthenticated ? (
                 <>
                    <li>
                        <Link to='/tasks'
                        >Welcome {user.username}</Link>
                        
                    </li>
                    <li>
                        <Link to='/add-task'
                        className='bg-indigo-500 px-4 py-1 rounded-sm'
                        >Add Task</Link>
                    </li>
                    <li>
                        <Link to='/' 
                        className='border-white border-1 px-4 py-1 rounded-sm'
                        onClick={()=>logout()}
                        >Logout</Link>
                    </li>
                </>
            ):(
                <>
                    <li>
                        <Link to='/login'
                        className='bg-indigo-500 px-4 py-1 rounded-sm'
                        >Login</Link>
                    </li>
                    <li>
                        <Link to='/register'
                        className='bg-indigo-500 px-4 py-1 rounded-sm'
                        >Register</Link>
                    </li>
                </>
            )}
            
        </ul>
    </nav>
  )
}

export default NavBar
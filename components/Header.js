import React from 'react'
import { useAuth } from '../context/AuthContext'


export default function Header() {

  const {logout, currentUser} = useAuth()

  return (
    <div className='stiky top-0 w-full left-0 text-xl md:text-2xl h-16 
    md:h-20 px-6 md:px-10 
    bg-low-dark flex justify-between items-center'>
        <h1 className='text-3xl sm:text-3xl font-bold'>HEIST LIST</h1>
        <span className='flex gap-3'>
          {
            currentUser && 
            <button onClick={() => logout()} className=' text-lg opacity-40 
            duration-300 hover:opacity-100' >SignOut</button>
          }
          
          <i className="fa-solid fa-user duration-300 cursor-pointer
          opacity-40 hover:opacity-100 "></i>
        </span>

        
    </div>

  )
}

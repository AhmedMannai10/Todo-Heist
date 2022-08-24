import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'


export default function UserDashboard() {

    const { userInfo } = useAuth()
    const [isAddingTodo, setIsAddingTodo] = useState(false)
    const [todoItem, setTodoItem] = useState('')
    const [todoList, setTodoList] = useState([])

    const changeHandler = (e) =>{
      e.preventDefault()
      
      setTodoItem(e.target.value)
    }

    const submitTodoHandler = (e) =>{
      e.preventDefault()
      setTodoList([
        todoItem, 
        ...todoList
      ])
      setIsAddingTodo(false)
    }

  return (
    <div className='flex-1 flex flex-col items-center w-full gap-3'>
        <button className='max-w-[20ch] text-white bg-blue-700 px-5 py-0.5 md:text-xl
           rounded-full my-2 md:my-3 hover:bg-blue-800' onClick={() => setIsAddingTodo(true)}>Add a Todo</button>
           {
            isAddingTodo && 
            <span >
              <form>
              <input className='text-black duration-300 ' 
               value={todoItem} onChange={changeHandler} /><button onClick={submitTodoHandler}></button>
              </form>

            </span>
           }
        <div className='flex-1 w-full max-w-[50ch] '>
           {
              todoList.length >= 1 ? todoList.map((todoItem, idx) => {
                return   (
                  <div key={idx} className='flex gap-2 text-lg w-full bg-
                   rounded-md'>
                    <input type='checkbox' key={idx} className=' w-5 text-green-500 bg-green-300'/>
                   <span className='flex-1'>{todoItem}</span>
                  <i key={idx} className="fa-solid fa-trash text-lg opacity-50 hover:opacity-100"></i>
                  </div>
                )
                  
              })
              :'Enter a todo item'
           }
        </div>
    </div>
  )
}

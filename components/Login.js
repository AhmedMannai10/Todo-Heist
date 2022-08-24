import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState(null)
  const [isLoggingIn, setIsLogging] = useState(true)

  const { login, signup, currentUser} = useAuth()

  async function submitHundler(){
    if(!email || !password){  
      setError('please enter your email and password')
      return 
     }
     if(isLoggingIn){
        try{
         await login(email, password) 
        }catch(err){
          setError('Incorrect email or password')
        }
      return 
     }
     await signup(email, password)

  }

  return (
    <div className="flex-1 bg-low-dark flex flex-col 
    items-center justify-center gap-4 ">

        <h1 className='font-extrabold text-3xl md:text-4xl text-slate-200 uppercase'>{isLoggingIn? 'login': 'register'}</h1>
        {
          !isLoggingIn && 
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text'  placeholder='Your Full Name' className='outline-none duration-300
          w-full max-w-[30ch] text-gray-900 p-2 border-b-2 border-solid rounded-sm
          focus:border-orange-400 bg-slate-200 ' ></input>
          
        }
        <input value={email} onChange={(e) => setEmail(e.target.value)} type='text'  placeholder='Email Address' className='outline-none duration-300
          w-full max-w-[30ch] text-gray-900 p-2 border-b-2 border-solid rounded-sm
          focus:border-orange-400 bg-slate-200 ' ></input>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'  placeholder='Password' className='outline-none duration-300
         w-full max-w-[30ch] text-gray-900 p-2 border-b-2 border-solid rounded-sm
         focus:border-orange-400 bg-slate-200 ' ></input>
         
         <button onClick={submitHundler} className='w-full max-w-[30ch] cursor-pointer py-2
          outline outline-2 outline-orange-500 text-gray-400 hover:text-gray-50 
          uppercase  rounded-sm relative hover:-translate-y-1 duration-300
          hover:bg-orange-500 '><h1 className=' font-bold'>submit</h1></button>

          {error && <div className='text-red-600 text-sm '>{error}</div>}
          <h1 onClick={()=>
            setIsLogging(!isLoggingIn)
         } className='duration-300 cursor-pointer hover:scale-110'>{!isLoggingIn ? 'Login': 'Register'}</h1>
    </div>

  )
}

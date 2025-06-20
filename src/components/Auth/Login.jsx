import React from 'react'
import { useState } from 'react';

const  Login=({handleLogin})=> {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setpassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-emerald-500 p-14 '>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-between  h-[180px]'>
                <input 
                required 
                value={email} 
                className='border-emerald-500 border-2 rounded-full py-2 px-5 outline-none bg-transparent text-xl  placeholder:text-grey-400'   
                type='email' 
                placeholder='Enter Your Email' 
                onChange={(e)=>{setEmail(e.target.value)}}>
                </input>

                <input 
                value={password} 
                onChange={(e)=>{setpassword(e.target.value)}}   
                className='border-emerald-500 border-2 rounded-full py-2 px-5 outline-none bg-transparent text-xl  placeholder:text-grey-400'  
                placeholder='Enter Your Password'>   
                </input>

                <button className='bg-emerald-500 mt-2 border-none rounded-full py-3 px-5 outline-none  text-xl  placeholder:text-grey-400 w-full '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
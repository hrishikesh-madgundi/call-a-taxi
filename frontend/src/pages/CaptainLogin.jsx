import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
          email: email,
          password: password
      })
      console.log(captainData)
      setEmail('')
      setPassword('')
    }
  
    return (
      <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <h1 className='w-50 text-3xl mb-10 text-black font-bold p-2 rounded'>Call-a-Taxi</h1>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
  
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg plceholder:text-base'
        type="email" 
        placeholder='email@example.com'
        />
  
        <h3 className='text-lg font-medium mb-2'>Enter password</h3>
  
        <input 
        required
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg plceholder:text-base'
        type="password" 
        placeholder='password'
        />
  
        <button
        className='bg-[#111] mb-2 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg plceholder:text-base'
        >Login</button>
          
        </form>
        <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
          <div>
              <Link to='/login' className='bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg plceholder:text-base'>Sign in as User</Link>
          </div>
      </div>
    )
  }

export default CaptainLogin

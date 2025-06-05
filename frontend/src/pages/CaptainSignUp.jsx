import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {

    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [firstName, setFirstName] = useState('')
      const [lastName, setLastName] = useState('')
      const [userData, setUserData] = useState({})
    
      const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName:{
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        })
        console.log(userData)
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
      }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <h1 className='w-50 text-3xl mb-10 text-black font-bold p-2 rounded'>Call-a-Taxi</h1>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>

      <h3 className='text-lg font-medium mb-2'>What's your name </h3> 
      <div className='flex gap-4 mb-5'>
      <input 
      required 
      className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg plceholder:text-base'
      type="text" 
      placeholder='Firstname'
      value={firstName}
      onChange={(e)=>{
        setFirstName(e.target.value)
      }}
      />
      <input 
      required 
      className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg plceholder:text-base'
      type="text" 
      placeholder='Lastname'
      value={lastName}
      onChange={(e)=>{
        setLastName(e.target.value)
      }}
      />
      </div>
       

      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input 
      required 
      className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg plceholder:text-base'
      type="email" 
      placeholder='email@example.com'
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />

      <h3 className='text-lg font-medium mb-2'>Enter password</h3>

      <input 
      required
      className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg plceholder:text-base'
      type="password" 
      placeholder='password'
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />

      <button
      className='bg-[#111] mb-2 text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg plceholder:text-base'
      >Login</button>
        
      </form>
      <p className='text-center'>Already Have an Account ? <Link to='/login' className='text-blue-600'>Login here</Link></p>
    </div>
      <div>
        <p className='text-sm mt-6 '>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignUp

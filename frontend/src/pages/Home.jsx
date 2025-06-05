import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className='h-screen pt-8 w-full flex-col flex justify-between items-start bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-top bg-no-repeat'>
      {/* <img src={logo} className='w-16 ml-8'/> */}
      <h1 className='w-40 text-2xl ml-8 text-white font-bold p-2 rounded'>Call-a-Taxi</h1>
      <div className='bg-white py-5 px-10'>
        <h2 className='text-3xl font-bold'>Get Started with Call-a-Taxi</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
      </div>
    </div>
  )
}

export default Home;
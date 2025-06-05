import React from 'react'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignUp';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignUp';
import { UserDataContext } from './context/userContext';
import { useContext } from 'react';

const App = () => {

  const ans = useContext(UserDataContext)
  console.log(ans)

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
      </Routes>
    </div>
  )
}

export default App;

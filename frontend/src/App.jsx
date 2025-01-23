import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import User_Login from './pages/User_Login'
import User_Signup from './pages/User_Signup'
import Captain_Loign from './pages/Captain_Loign'
import Captain_Signup from './pages/Captain_Signup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<User_Login/>}/>
        <Route path='signup' element={<User_Signup/>}/>
        <Route path='captain-login' element={<Captain_Loign/>}/>
        <Route path='captain-signup' element={<Captain_Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
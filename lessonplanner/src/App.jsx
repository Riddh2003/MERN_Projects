import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login.jsx'
import { Navbar } from './components/Navbar.jsx'
import { PlannerAI } from './components/PlannerAI.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'

function App() {
  return (
    <div className='max-w-full min-h-screen'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<ProtectedRoutes allowedRole='user' />}>
          <Route path='/plannerai' element={<PlannerAI />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

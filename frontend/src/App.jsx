import React from 'react'
import { Login } from './components/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../src/components/Navbar'
import { User } from './components/User';

function App() {
  const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('accessToken');
    return isAuthenticated ? children : <Navigate to='/' replace />;
  }

  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/user' element={
        <ProtectedRoute>
          <div className='w-full min-h-[95vh] flex-row px-6 py-2'>
            <Navbar />
            <User />
          </div>
        </ProtectedRoute>}>
      </Route>
      <Route path='/*' element={<Navigate to='/' replace />}></Route>
    </Routes>
  )
}

export default App

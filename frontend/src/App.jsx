import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-[97vh] flex items-center justify-center bg-black">
      <Routes>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App

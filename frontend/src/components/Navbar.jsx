import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setTimeout(() => {
            navigate('/');
        }, 500)
    }
    return (
        <nav className='flex w-full bg-[#8989ff] text-white h-16 rounded-lg justify-between items-center p-4 font-mono'>
            <Link to='/user' className='text-decoration-none text-white text-2xl font-semibold'>UserPage</Link>
            <button onClick={handleLogout} className='bg-red-500 hover:bg-white hover:text-red-500 font-semibold p-2 rounded-md'>Logout</button>
        </nav>
    )
}

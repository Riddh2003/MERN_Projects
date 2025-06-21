import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [login, setLogin] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    const now = new Date();

    const submitHandler = async (data) => {
        setShowToast(false)
        try {
            const response = await axios.post('http://localhost:3000/user/login', {
                email: data.email,
                password: data.password
            })
            // console.log(response);
            if (response.data.token) {
                localStorage.setItem('accessToken', response.data.token, now.getTime() + 15 * 60 * 1000);
                document.cookie = `refreshToken=${response.data.refreshToken}; max-age=${60 * 60 * 24 * 7}; path=/`;
                setLogin(true);
                setShowToast(true);

                setTimeout(() => {
                    navigate('/user')
                }, 500);
            }
            // alert('Login successfully');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex-row h-[97vh] w-full text-black font-mono'>
            <div>
                {login &&
                    <ToastContainer
                        className="p-3"
                        position='top-center'
                        style={{ zIndex: 1 }}
                    >
                        <Toast bg='success'
                            onClose={() => setShowToast(false)}
                            show={showToast}
                            delay={3000}
                            autohide>
                            <Toast.Header>
                                <strong className='text-green-500 me-auto text-3xl'>Sucess</strong>
                            </Toast.Header>
                            <Toast.Body className='text-white'>
                                Login Successful!
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                }
            </div>
            <div className='flex h-full items-center justify-evenly'>
                < div className='flex-row text-center' >
                    <h1 className='text-4xl mb-8 font-bold text-[#8989ff]'>Welcome to the login page!</h1>
                    <img className='rounded-2xl h-[400px] w-[500px]' src="https://camo.githubusercontent.com/f65c741b95a320e7586bdc58c8d499eeb41a7d3cb0607c84f633dd8daf0809a0/68747470733a2f2f616e75726167626861726477616a2e6e65746c6966792e6170702f636f64696e676775792e676966" alt="coding" />
                </div >
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="bg-[#b8b8ff] bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-lg rounded-br-lg shadow-2xl w-full max-w-md transform transition-all duration-700 ease-in-out animate-fade-in-up "
                >

                    <h1 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
                        Login
                    </h1>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required: "email is required.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email..."
                                }

                            })}
                            type="email"
                            id="email"
                            className="w-full px-5 py-3 rounded-lg bg-gray-200 text-black placeholder-[#8989ff] focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="mb-8">
                        <label htmlFor="password" className="block text-white text-lg font-medium mb-2">
                            Password
                        </label>
                        <div className="flex items-center">
                            <input
                                {...register('password', { required: "Password is required..." })}
                                type="password"
                                id="password"
                                className="w-full px-5 py-3 rounded-lg bg-gray-200 text-black placeholder-[#8989ff] focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
                                placeholder="Enter your password"
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full max-w-xs bg-[#e9e9ff] text-[#8989ff] font-bold py-3 px-8 rounded-full shadow-lg  focus:outline-none focus:ring-3 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                        >
                            Sign In
                        </button>
                    </div>

                    <p className="text-center text-white text-md mt-6">
                        Don't have an account?{' '}
                        <a href="#" className="text-[#8989ff] hover:text-blue-600 font-semibold transition duration-200">
                            Sign Up
                        </a>
                    </p>
                </form>
            </div>
        </div >
    );
}

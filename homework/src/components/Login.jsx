import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const users = [
        {
            id: 1,
            email: "riddhmodi@gmail.com",
            password: "1234",
            role: "admin"
        },
        {
            id: 2,
            email: "sumit@gmail.com",
            password: "1234",
            role: "manager"
        },
        {
            id: 3,
            email: "jainam@gmail.com",
            password: "1234",
            role: "user"
        }
    ];
    const submitHandler = (data) => {
        const user = users.find(user => user.email === data.email && user.password === data.password);
        if (user) {
            alert('Login successfully...');
            localStorage.setItem('role', user.role);
            localStorage.setItem('id', user.id);
        } else {
            alert('Invalid Credentials!');
        }
    };

    return (
        <div className="min-h-fit flex items-center justify-center p-4">
            <form onSubmit={handleSubmit(submitHandler)} className="bg-white p-6 rounded-lg shadow w-full max-w-md"
                style={{
                    fontFamily: "Mystery Quest, serif",
                }}>
                <h1 className="text-2xl font-bold mb-4 text-center text-[#6b21a8]">Login</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="text"
                        {...register('email')}
                        placeholder="Enter the email"
                        className="border-2 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-900"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        {...register('password')}
                        placeholder="Enter the password"
                        className="border-2 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-900"
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
import React from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const users = [
        {
            email: 'riddhmodi2003@gmail.com',
            password: 'riddh1234',
            role: 'user'
        },
        {
            email: 'vaibhav@gmail.com',
            password: 'vaibhav1234',
            role: 'user'
        },
        {
            email: 'sumit@gmail.com',
            password: 'sumit1234',
            role: 'user'
        }
    ]

    const navigate = useNavigate();

    const submitHandler = (data) => {
        const user = users.find(user => user.email === data.email && user.password === data.password)
        if (user) {
            localStorage.setItem('email', user.email);
            localStorage.setItem('password', user.password);
            localStorage.setItem('role', user.role);
            navigate('/plannerai');
        }
        else {
            alert('Invalid Credentials!');
        }
    }
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg text-[#6b21a8]">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <Label className="block text-[#6b21a8] font-semibold mb-2">Email:</Label>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            {...register('email')}
                            className="border-2 text-gray-700 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-900"
                        />
                    </div>
                    <div>
                        <Label className="block text-[#6b21a8] font-semibold mb-2">Password:</Label>
                        <Input
                            type="password"
                            placeholder="Enter your password"
                            {...register('password')}
                            className="
                             text-gray-700 border-2 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-900"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button type="submit" className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
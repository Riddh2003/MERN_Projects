import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export const Login = () => {
    const { register, handleSubmit } = useForm();
    const themestate = useSelector((state) => state.theme.theme);

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
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit(submitHandler)}
                className={`w-full max-w-md p-8 rounded-xl shadow-xl transition-all duration-300 ${themestate === 'white'
                        ? 'bg-white text-gray-900'
                        : 'bg-gray-900 text-white'
                    }`}
                style={{
                    fontFamily: "Mystery Quest, serif",
                }}
            >
                <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">Welcome Back</h1>

                <div className="space-y-6">
                    <div>
                        <label className={`block text-sm font-medium mb-2 ${themestate === 'white' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 rounded-lg border ${themestate === 'white'
                                    ? 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                                    : 'border-gray-700 focus:border-purple-500 bg-gray-800 text-white'
                                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                        />
                    </div>

                    <div>
                        <label className={`block text-sm font-medium mb-2 ${themestate === 'white' ? 'text-gray-700' : 'text-gray-300'
                            }`}>
                            Password
                        </label>
                        <input
                            type="password"
                            {...register('password')}
                            placeholder="Enter your password"
                            className={`w-full px-4 py-2 rounded-lg border ${themestate === 'white'
                                    ? 'border-gray-300 focus:border-purple-500 bg-white text-gray-900'
                                    : 'border-gray-700 focus:border-purple-500 bg-gray-800 text-white'
                                } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300`}
                        />
                    </div>
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};
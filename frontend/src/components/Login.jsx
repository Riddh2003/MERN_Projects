import React from 'react'

export const Login = () => {
    return (
        <form
            className="bg-gray-700 bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-tr-[50px] rounded-bl-[50px] rounded-tl-lg rounded-br-lg shadow-2xl w-full max-w-md transform transition-all duration-700 ease-in-out animate-fade-in-up font-serif"
        >

            <h1 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
                Login
            </h1>
            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div className="mb-8">
                <label htmlFor="password" className="block text-gray-300 text-lg font-medium mb-2">
                    Password
                </label>
                <div className="flex items-center">
                    <input
                        type="password"
                        id="password"
                        className="w-full px-5 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
                        placeholder="Enter your password"
                        required
                    />
                </div>
            </div>
            <div>
                <input type='checkbox' className="text-center text-lg mb-6 text-gray-400 mr-4"></input>
                <span className='text-white'>Enter your credentials to proceed.</span>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="w-full max-w-xs bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-3 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    Sign In
                </button>
            </div>

            <p className="text-center text-gray-400 text-md mt-6">
                Don't have an account?{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold transition duration-200">
                    Sign Up
                </a>
            </p>
        </form>
    );
}

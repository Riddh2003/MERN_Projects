import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ValidationForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' });
    const [userData, setUserData] = useState();
    const [isSubmited, setIsSubmited] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');

    const submitHandler = (data) => {
        console.log(data)
        setUserData(data);
        setIsSubmited(true);
    };

    const validationSchema = {
        name: {
            required: {
                value: true,
                message: "Name is required*"
            }
        },
        password: {
            required: {
                value: true,
                message: "Password is required*"
            },
            pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$&_*]).{8,15}$/,
                message: "Password length must be between 8 to 15."
            }
        },
        hobby: {
            validate: {
                minLength: (value) => value.length >= 3 || "Minimum 3 hobbies must be selected"
            }
        }
    };

    const countries = {
        India: ['Gujarat', 'Pune', 'Hyderabad', 'Bangalore'],
        USA: ['California', 'Texas', 'Florida', 'New York']
    };
    const password = watch('password', '');

    const isSpecialChar = /[!@#$&_*]/.test(password);
    const isUpperCase = /[A-Z]/.test(password);
    const isMinLength = password.length >= 8;

    return (
        <div className='min-h-fit flex items-center justify-center p-4'>
            <form onSubmit={handleSubmit(submitHandler)} className='bg-white rounded-lg w-full max-w-lg p-6 shadow-md text-[#6b21a8]' style={{ fontFamily: "Mystery Quest, serif" }}>
                <h1 className='text-4xl text-center font-bold mb-4'>Validation Form</h1>
                <div className='mb-4'>
                    <label className='block text-[#6b21a8] font-semibold mb-2'>Name
                        <span className='text-red-600 ml-4 font-normal'>{errors.name?.message}</span>
                    </label>
                    <input
                        type='text'
                        placeholder='Enter Name'
                        className='border-2 border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-900'
                        {...register('name', validationSchema.name)}
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-[#6b21a8] font-semibold mb-2'>Password
                        <span className='text-red-600 ml-4 font-normal'>{errors.password?.message}</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='border-2 border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-900'
                        {...register('password', validationSchema.password)}
                    />
                    <div className='mb-4'>
                        <li className={isSpecialChar ? 'text-green-600' : 'text-red-600'}>Must contain one special character</li>
                        <li className={isUpperCase ? 'text-green-600' : 'text-red-600'}>Must contain one uppercase letter</li>
                        <li className={isMinLength ? 'text-green-600' : 'text-red-600'}>Password minimum length is 8</li>
                    </div>
                </div>
                <label className='block text-[#6b21a8] font-semibold mb-2'>Hobby
                    <span className='text-red-600 ml-4 font-normal'>{errors.hobby?.message}</span>
                </label>
                <div className='flex flex-col items-start'>
                    <label className='flex items-center mb-2'>
                        <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 border-blue-500' value='Cricket' {...register('hobby', validationSchema.hobby)} />
                        <span className='ml-2'>Cricket</span>
                    </label>
                    <label className='flex items-center mb-2'>
                        <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 border-blue-500' value='Chess' {...register('hobby', validationSchema.hobby)} />
                        <span className='ml-2'>Chess</span>
                    </label>
                    <label className='flex items-center mb-2'>
                        <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 border-blue-500' value='Football' {...register('hobby', validationSchema.hobby)} />
                        <span className='ml-2'>Football</span>
                    </label>
                    <label className='flex items-center mb-2'>
                        <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 border-blue-500' value='Table Tennis' {...register('hobby', validationSchema.hobby)} />
                        <span className='ml-2'>Table Tennis</span>
                    </label>
                    <label className='flex items-center mb-2'>
                        <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 border-blue-500' value='Tennis' {...register('hobby', validationSchema.hobby)} />
                        <span className='ml-2'>Tennis</span>
                    </label>
                    <label className='flex items-center mb-2'>
                        <input type='checkbox' className='form-checkbox h-4 w-4 text-blue-600 border-blue-500' value='Volleyball' {...register('hobby', validationSchema.hobby)} />
                        <span className='ml-2'>Volleyball</span>
                    </label>
                </div>
                <div className=''>
                    <label className='block text-[#6b21a8] font-semibold mb-2'>Country:</label>
                    <select
                        className='border-2 text-gray-700 border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-900'
                        onChange={(e) => setSelectedCountry(e.target.value)}
                    >
                        <option value=''>Select Country</option>
                        {Object.keys(countries).map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedCountry && (
                    <div className=''>
                        <label className='block text-[#6b21a8] font-semibold mb-2'>State:</label>
                        <select className='border-2 text-gray-700 border-gray-300 rounded w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-900'>
                            <option value=''>Select State</option>
                            {countries[selectedCountry].map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                <button type='submit' className='bg-purple-800 text-white rounded-md p-2 mt-4 hover:bg-purple-700 transition duration-300'>
                    Submit
                </button>
            </form>
            {isSubmited && (
                <div className='mt-6 p-4 bg-white rounded-lg shadow-md w-full max-w-lg text-[#6b21a8]' style={{ fontFamily: "Mystery Quest, serif" }}>
                    <h2 className='text-2xl font-bold mb-4'>Submitted Data</h2>
                    <p>Name: {userData.name}</p>
                    <p>Password: {userData.password}</p>
                </div>
            )}
        </div>
    );
};
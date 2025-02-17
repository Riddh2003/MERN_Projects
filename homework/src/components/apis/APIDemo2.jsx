import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const APIDemo2 = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        const user = {
            name: data.name,
            age: data.age,
            email: data.email,
            isActive: true,
        };

        await toast.promise(
            axios.post("https://node5.onrender.com/user/user", user),
            {
                pending: "Processing your request...",
                success: "User added successfully!",
                error: "Something went wrong! Please try again",
            },
            {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Bounce,
            }
        ).then((res) => {
            if (res.status === 201) {
                navigate("/navbar/apidemo");
            }
        }).catch((error) => {
            console.error("Error : ", error);
        });
    };

    return (
        <div className="min-h-fit flex items-center justify-center p-4">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className="w-full max-w-lg p-8 bg-white shadow text-[#6b21a8] rounded-lg" style={{ fontFamily: "Mystery Quest, serif" }}>
                <h1 className="mb-6 text-3xl font-semibold text-center">
                    Add Student Data
                </h1>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register('name')}
                            placeholder="Enter Name"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email')}
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium">
                            Age
                        </label>
                        <input
                            type="number"
                            {...register('age')}
                            placeholder="Enter Age"
                            className="w-full px-4 py-2 text-gray-700 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-900 focus:border-purple-900"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-purple-800 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
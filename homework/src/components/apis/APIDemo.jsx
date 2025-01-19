import React, { useState } from 'react';
import axios from 'axios';

export const APIDemo = () => {
    const [userData, setUserData] = useState([]);

    const apicall = async () => {
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log(res.data.data[0]);
        setUserData(res.data.data);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6">API DEMO</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition duration-300"
                onClick={apicall}
            >
                Get
            </button>
            <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4">Id</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr className="border-b">
                            <td className="py-2 px-4">{user._id}</td>
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4">{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

export const EditUser = () => {
    const [loading, setLoading] = useState(false);
    const id = useParams().id;
    const { register, handleSubmit } = useForm({
        defaultValues: async () => {
            const res = await axios.get("https://node5.onrender.com/user/user/" + id);
            return res.data.data;
        }
    });

    const navigate = useNavigate();
    const Submithandler = async (data) => {
        console.log(data);
        delete data._id;
        setLoading(true);
        try {
            const res = await axios.put("https://node5.onrender.com/user/user/" + id, data);
            console.log(res);
            loading && <Loader />
            navigate("/navbar/apidemo");
        } catch (e) {
            alert("error while update data...")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <form onSubmit={handleSubmit(Submithandler)} className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Edit User</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                    <input
                        type="text"
                        {...register('name')}
                        className="border-2 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                    <input
                        type="email"
                        {...register('email')}
                        className="border-2 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Age:</label>
                    <input
                        type="number"
                        {...register('age')}
                        className="border-2 border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};
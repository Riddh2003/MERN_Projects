import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Loader from '../Loader';  // Import your custom Loader component

export const APIDemo = () => {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(false);
    const [userDetail, setUserDetail] = useState({});
    const [loading, setLoading] = useState(false); // Add loading state

    const apicall = async () => {
        setLoading(true); // Set loading to true when API call starts
        try {
            const res = await axios.get("https://node5.onrender.com/user/user");
            setUserData(res.data.data);
        } catch (error) {
            console.error("Error fetching users:", error.response?.data || error.message);
            alert("Failed to fetch user data. Please try again later.");
        }
        setLoading(false); // Set loading to false after API call finishes
    };

    const detailUser = async (id) => {
        setLoading(true); // Set loading to true when API call starts
        const res = await axios.get("https://node5.onrender.com/user/user/" + id);
        setUserDetail(res.data.data);
        setShow(true);
        setLoading(false); // Set loading to false after API call finishes
    };

    const deleteUser = async (id) => {
        setLoading(true); // Set loading to true when API call starts
        const res = await axios.delete("https://node5.onrender.com/user/user/" + id);
        if (res.status === 204) {
            // alert('User Deleted Successfully')
        }
        apicall(); // Refresh the user data
        setLoading(false); // Set loading to false after API call finishes
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6">API DEMO</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition duration-300"
                onClick={() => { apicall() }}
                disabled={loading} // Disable button while loading
            >
                {loading ? <Loader /> : "Get"}
            </button>
            <table className="min-w-full bg-gray-200 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-400 text-left">
                        <th className="py-2 px-4">Id</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Age</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr className="border-b" key={user._id}>
                            <td className="py-3 px-4">{user._id}</td>
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">{user.age}</td>
                            <td className="flex gap-2 py-3 px-4">
                                <Button
                                    variant="btn btn-info"
                                    onClick={() => { detailUser(user._id) }}
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? <Loader /> : "Details"}
                                </Button>
                                <Button
                                    variant="btn btn-danger"
                                    onClick={() => { deleteUser(user._id) }}
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? <Loader /> : "Delete"}
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1 className="text-2xl">{userDetail.name}</h1>
                    <p className="text-xl">{userDetail.email}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

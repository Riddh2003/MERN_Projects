import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Loader from '../Loader';  // Import your custom Loader component
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication.js';

export const APIDemo = () => {
    const [userData, setUserData] = useState([]);
    const [show, setShow] = useState(false);
    const [userDetail, setUserDetail] = useState({});
    const [loading, setLoading] = useState(false); // Add loading state

    const { isAdmin } = useAuthentication();

    const getAllUser = async () => {
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
        getAllUser(); // Refresh the user data
        setLoading(false); // Set loading to false after API call finishes
    };

    useEffect(() => {
        getAllUser();
    }, [])


    return (
        <div className="min-h-fit flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-6 text-[#6b21a8]" style={{ fontFamily: "Mystery Quest, serif" }}>API DEMO</h1>
            <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-[#6b21a8] text-white text-left">
                        {isAdmin && <th className="py-2 px-4">Id</th>}
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Email</th>
                        <th className="py-2 px-4">Age</th>
                        <th className="py-2 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr className="border-b" key={user._id}>
                            {isAdmin && <td className="py-3 px-4">{user._id}</td>}
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
                                {isAdmin && (
                                    <Button
                                        variant="btn btn-danger"
                                        onClick={() => { deleteUser(user._id) }}
                                    // Disable button while loading
                                    >
                                        {loading ? <Loader /> : "Delete"}
                                    </Button>
                                )}
                                <Link to={`/navbar/edituser/${user._id}`} className='bg-green-500 px-3 py-2 text-white rounded' style={{ fontFamily: "Mystery Quest, serif" }}>
                                    <button>
                                        {loading ? <Loader /> : "Update"}
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className='font-medium text-3xl' style={{ color: '#6b21a8', fontFamily: "Mystery Quest, serif" }}>User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-xl" style={{ color: '#6b21a8', fontFamily: "Mystery Quest, serif" }}>Name : {userDetail.name}</p>
                    <p className="text-xl" style={{
                        color: '#6b21a8', fontFamily: "Mystery Quest, serif"
                    }}>Email : {userDetail.email}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}
                        className='bg-purple-800 hover:bg-purple-700'
                        style={{ color: 'white', fontFamily: "Mystery Quest, serif" }} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {loading && <Loader />} {/* Show loader at the bottom of the page */}
        </div>
    );
};
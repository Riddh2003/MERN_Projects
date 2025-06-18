import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

export const User = () => {

    const navigate = useNavigate();
    const [users, setUser] = useState();
    const [loadging, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setShowToast(true);
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    navigate('/');
                    setLoading(false);
                    return;
                }
                const response = await axios.get('http://localhost:3000/user/users', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                console.log(response.data.data)
                setUser(response.data.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchUser();
    }, [navigate])

    if (loadging) {
        return <ToastContainer
            className="p-3"
            position='top-center'
            style={{ zIndex: 1 }}
        >
            <Toast bg='primary'
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide>
                <Toast.Header>
                    <strong className='text-blue- me-auto text-3xl'>Loading</strong>
                </Toast.Header>
                <Toast.Body className='text-white text-xl'>
                    Loading.....!
                </Toast.Body>
            </Toast>
        </ToastContainer>
    }

    return (
        <div className='px-6 py-4 w-full min-h-full'>
            <h1 className='text-3xl'>User</h1>
            {users.length === 0 ? (<p>No users found...</p>) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {users.map(user => {
                        <Card key={user._id || user.id} className="w-96">
                            <CardHeader floated={false} className="h-80">
                                <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                            </CardHeader>
                            <CardBody className="text-center">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    {user.name}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                    {user.age}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                    {user.gender}
                                </Typography>
                                <Typography color="blue-gray" className="font-medium" textGradient>
                                    {user.email || "xyz@gmail.com"}
                                </Typography>
                            </CardBody>
                        </Card>
                    })}
                </div>
            )}
        </div >
    )
}

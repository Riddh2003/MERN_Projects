import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const User = () => {
    const navigate = useNavigate();
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
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
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log(response.data.data)
                setUser(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchUser();
    }, [navigate]);

    if (loading) {
        return (
            <ToastContainer className="p-3" position="top-center" style={{ zIndex: 1 }}>
                <Toast
                    bg="primary"
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto text-3xl text-blue-900">Loading</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white text-xl">Loading.....!</Toast.Body>
                </Toast>
            </ToastContainer>
        );
    }

    return (
        <div className="px-4 py-4 w-full min-h-full">
            <h1 className="text-3xl text-[#8989ff] font-semibold mb-4">UserData</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <Card key={user._id || user.id} style={{ width: '18rem', backgroundColor: '#000000', color: '#FFFFFF' }}
                        className='rounded-xl'>
                        <Card.Img
                            variant="top"
                            className='rounded-xl'
                            src="https://w0.peakpx.com/wallpaper/416/423/HD-wallpaper-devil-boy-in-mask-red-hoodie-dark-background-4ef517.jpg"
                            style={{ height: '250px' }}
                        />
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text style={{ marginBottom: '6px' }}>
                                {user.age}<br />
                                {user.gender}<br />
                                {user.email || 'xyz@gmail.com'}<br />
                                {user.bloodgroups || 'AB+'}<br />
                            </Card.Text>
                            <Button variant="primary">more...</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

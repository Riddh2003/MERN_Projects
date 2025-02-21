import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader.jsx"

export const Navbar = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        setLoading(true);
        setTimeout(() => {
            navigate(path);
            setLoading(false);
        }, 500);
    };

    return (
        <div className="h-fit top-2 px-4 py-2 z-50 position-sticky"
            style={{
                fontFamily: "Mystery Quest, serif",
            }}
        >
            {loading && <Loader />}
            <div className="navbar w-full p-2 rounded-xl bg-white shadow text-[#6b21a8] backdrop-blur-md">
                <div className="w-full flex justify-between items-center px-4 py-1">
                    <Link className="text-5xl font-bold transition-all"
                        onClick={() => handleNavigation('/')}
                    >
                        Lesson Planner
                    </Link>
                    <div>
                        <Link className="hover:text-[#6b21a8] hover:bg-gray-200 text-white shadow-lg px-4 py-2 bg-[#6b21a8] rounded text-xl transition-all duration-300 transform" onClick={() => handleNavigation('/login')}
                        >
                            <button>
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};
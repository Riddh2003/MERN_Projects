import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";

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
    <div className="h-fit top-2 z-50 position-sticky"
      style={{
        fontFamily: "Mystery Quest, serif",
      }}
    >
      {loading && <Loader />}
      <div className="navbar w-full rounded-lg bg-white shadow text-[#6b21a8] backdrop-blur-md">
        <div className="w-full flex justify-between items-center px-4 py-1">
          <Link className="text-5xl font-bold transition-all"
            onClick={() => handleNavigation('/')}
          >
            Harry Potter
          </Link>
          <div className="hidden lg:flex gap-8 text-lg">
            <ul className="flex gap-8">
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/form")}>
                  Form
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/exam")}>
                  Exam
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/validationform")}>
                  Validation Form
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/apidemo")}>
                  APIDemo
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/movies")}>
                  Movies
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/apidemo2")}>
                  APIDemo2
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/usememo")}>
                  UseMemo
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/bomb")}>
                  Bomb
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/memorygame")}>
                  Memory Game
                </button>
              </li>
              <li>
                <button className="hover:text-black transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/product")}>
                  Product
                </button>
              </li>
            </ul>
          </div>
          <div>
            <Link className="hover:text-black text-white shadow px-4 py-2 bg-[#6b21a8] rounded text-xl transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation('/login')}
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
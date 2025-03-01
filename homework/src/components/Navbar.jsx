import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { changeTheme } from "../redux/themeSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "./Switch.jsx";

export const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 500);
  };
  const themestate = useSelector((state) => state.theme.theme);

  return (
    <div className="h-fit top-2 z-50 position-sticky"
      style={{
        fontFamily: "Mystery Quest, serif",
      }}
    >
      {loading && <Loader />}
      <div className={`navbar w-full rounded-lg shadow ${themestate === 'white' ? 'bg-white text-[#6b21a8]' : 'text-white bg-black'} backdrop-blur-md`}>
        <div className="w-full flex justify-between items-center px-4 py-1">
          <Link className="text-4xl font-bold transition-all"
            onClick={() => handleNavigation('/')}
          >
            Harry Potter
          </Link>
          <div className="hidden lg:flex gap-4 text-lg">
            <ul className="flex gap-3">
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/form")}>
                  Form
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/exam")}>
                  Exam
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/validationform")}>
                  Validation Form
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/apidemo")}>
                  API Demo
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/movies")}>
                  Movies
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/apidemo2")}>
                  API Demo2
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/usememo")}>
                  Use Memo
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/bomb")}>
                  Bomb
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/memorygame")}>
                  Memory Game
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/product")}>
                  Product
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navbar/bank")}>
                  Bank
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navber/studenttable")}>
                  Student Table
                </button>
              </li>
              <li>
                <button className="transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation("/navber/studenttable2")}>
                  Student Table2
                </button>
              </li>
              <li onChange={() => { dispatch(changeTheme()) }}>
                <Switch />
              </li>
            </ul>
          </div>
          <div>
            <Link className="text-white shadow px-3 py-2 bg-[#6b21a8] rounded text-xl transition-all duration-300 transform hover:scale-105" onClick={() => handleNavigation('/login')}
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
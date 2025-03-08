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
    <div className="sticky top-0 z-50 w-full"
      style={{
        fontFamily: "Mystery Quest, serif",
      }}
    >
      {loading && <Loader />}
      <div className={`w-full px-4 py-3 shadow-lg transition-all duration-300 ${themestate === 'white' ? 'bg-white text-purple-900' : 'bg-gray-900 text-white'}`}>
        <div className="container mx-auto flex items-center justify-between">
          <Link
            className="text-3xl font-bold hover:text-purple-600 transition-all duration-300"
            onClick={() => handleNavigation('/')}
          >
            Harry Potter
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex items-center space-x-6">
                {[
                  { path: "/navbar/form", label: "Form" },
                  { path: "/navbar/exam", label: "Exam" },
                  { path: "/navbar/validationform", label: "Validation Form" },
                  { path: "/navbar/apidemo", label: "API Demo" },
                  { path: "/navbar/movies", label: "Movies" },
                  { path: "/navbar/apidemo2", label: "API Demo2" },
                  { path: "/navber/studenttable2", label: "Student Table2" },
                  { path: "/content", label: "Content" },
                ].map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="text-base font-medium hover:text-purple-600 transition-all duration-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li className="flex items-center" onChange={() => { dispatch(changeTheme()) }}>
                  <Switch />
                </li>
              </ul>
            </nav>

            <Link
              onClick={() => handleNavigation('/login')}
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
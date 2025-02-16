import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="h-fit top-2 z-50 position-sticky"
      style={{
        fontFamily: "Mystery Quest, serif",
      }}
    >
      <div className="navbar w-full rounded-lg bg-white shadow text-[#6b21a8] backdrop-blur-md">
        <div className="w-full flex justify-between items-center px-4 py-1">
          <Link className="text-5xl font-bold transition-all"
            to="/">
            Harry Potter
          </Link>
          <div className="hidden lg:flex gap-8 text-lg">
            <ul className="flex gap-8">
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/form">
                  Form
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/exam">
                  Exam
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/validationform">
                  Validation Form
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/apidemo">
                  APIDemo
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/movies">
                  Movies
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/apidemo2">
                  APIDemo2
                </Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/usememo">UseMemo</Link>
              </li>
              <li>
                <Link className="hover:text-black transition-all duration-300 transform hover:scale-105" to="/navbar/bomb">Bomb</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link className="hover:text-black text-white shadow px-4 py-2 bg-[#6b21a8] rounded text-xl transition-all duration-300 transform hover:scale-105" to="/login">
              <button>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

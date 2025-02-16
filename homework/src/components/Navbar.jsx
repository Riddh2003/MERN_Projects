import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full h-full top-2 z-50 position-sticky"
      style={{
        fontFamily: "Mystery Quest, serif",
      }}
    >
      <div className="navbar rounded-lg bg-white shadow-lg text-[#6b21a8] backdrop-blur-md">
        <div className="flex justify-between items-center px-4 py-1 gap-16">
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
                  APIDemo 2
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
        </div>
      </div>
    </div>
  );
};

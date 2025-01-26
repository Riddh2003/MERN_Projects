import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full">
      <div className="navbar rounded-lg bg-transparent text-white shadow-lg backdrop-blur-md">
        <div className="flex justify-between items-center px-4 py-2 gap-16">
          <Link className="text-4xl font-bold text-white transition-all" to="/">
            Navbar
          </Link>
          <div className="hidden lg:flex gap-8 text-lg">
            <ul className="flex gap-8">
              <li>
                <Link className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105" to="/navbar/form">
                  Form
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105" to="/navbar/exam">
                  Exam
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105" to="/navbar/validationform">
                  Validation Form
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105" to="/navbar/apidemo">
                  APIDemo
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105" to="/navbar/movies">
                  Movies
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-all duration-300 transform hover:scale-105" to="/navbar/apidemo2">
                  APIDemo 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

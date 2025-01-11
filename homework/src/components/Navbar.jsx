import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-800 mx-4 my-2 rounded-xl text-black px-16 py-4">
        <div className="flex gap-16">
          <Link className="btn btn-ghost text-2xl font-semibold" to="/">
            Navbar
          </Link>
          <div className="">
            <ul className="flex gap-4 pt-1">
              <li>
                <Link className="text-lg" to="/navbar/form">
                  Form
                </Link>
              </li>
              <li>
                <Link className="text-lg" to="/navbar/exam">
                  Exam
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

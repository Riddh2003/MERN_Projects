import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-zinc-400 via-zinc-600 to-zinc-800 rounded-xl text-black px-16">
                <div className="flex gap-16">
                    <Link className="btn btn-ghost text-2xl font-semibold" to="/">
                        Navbar
                    </Link>
                    <div className="">
                        <ul className="flex gap-4 pt-2">
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
                            <li>
                                <Link className="text-lg" to="/navbar/validationform">
                                    ValidationForm
                                </Link>
                            </li>
                            <li>
                                <Link className="text-lg" to='/navbar/apidemo'>
                                    APIDemo
                                </Link>
                            </li>
                            <li>
                                <Link className="text-lg" to='/navbar/movies'>
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link className="text-lg" to='/navber/apidemo2'>
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

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Exam } from "./components/Exam";
import { ValidationForm } from "./components/ValidationForm";
import { APIDemo } from "./components/apis/APIDemo";
import { MovieCards } from "./components/apis/MovieCards";
import { Imdb } from "./components/apis/Imdb";
import { APIDemo2 } from "./components/apis/APIDemo2";
import './App.css'; // Import the custom CSS
import { useEffect } from "react";

function App() {
    useEffect(() => {
        // Generate stars dynamically
        const starContainer = document.querySelector(".glowing-stars");
        for (let i = 0; i < 200; i++) {
            const star = document.createElement("div");
            star.className = "star";
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            starContainer.appendChild(star);
        }
    }, []);

    return (
        <div className="universe-bg w-full h-full flex flex-col px-3 py-3">
            <div className="nebula"></div>
            <div className="glowing-stars"></div>
            <div>
                <Navbar></Navbar>
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/navbar/form" element={<Form />} ></Route>
                        <Route path="/navbar/exam" element={<Exam />} ></Route>
                        <Route path="/navbar/validationform" element={<ValidationForm />} ></Route>
                        <Route path="/navbar/apidemo" element={<APIDemo />} ></Route>
                        <Route path="/navbar/movies" element={<MovieCards />} ></Route>
                        <Route path="/navbar/movies/moivedetails/:id" element={<Imdb />} ></Route>
                        <Route path="/navber/apidemo2" element={<APIDemo2 />} ></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Exam } from "./components/Exam";
import { ValidationForm } from "./components/ValidationForm";
import { APIDemo } from "./components/apis/APIDemo";
import { MovieCards } from "./components/apis/MovieCards";
import { Imdb } from "./components/apis/Imdb";
import { APIDemo2 } from "./components/apis/APIDemo2";
import { UseMemo } from "./components/apis/UseMemo.jsx";
import { EditUser } from "./components/apis/EditUser.jsx";
import { Bomb } from "./components/Bomb.jsx";
import { Home } from "./components/Home.jsx";
import { Login } from "./components/Login.jsx";

function App() {
    return (
        <div className="universe-bg flex flex-col px-3 py-2 w-full h-[100vh]">
            <Navbar></Navbar>
            <div className="flex-grow p-4">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/navbar/form" element={<Form />} ></Route>
                    <Route path="/navbar/exam" element={<Exam />} ></Route>
                    <Route path="/navbar/validationform" element={<ValidationForm />} ></Route>
                    <Route path="/navbar/apidemo" element={<APIDemo />} ></Route>
                    <Route path="/navbar/movies" element={<MovieCards />} ></Route>
                    <Route path="/navbar/movies/moivedetails/:id" element={<Imdb />} ></Route>
                    <Route path="/navbar/apidemo2" element={<APIDemo2 />} ></Route>
                    <Route path="/navbar/useMemo" element={<UseMemo />}></Route>
                    <Route path="/navbar/edituser/:id" element={<EditUser />}></Route>
                    <Route path="/navbar/bomb" element={<Bomb />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

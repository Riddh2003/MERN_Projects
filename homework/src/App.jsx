import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Form } from "./components/Form.jsx";
import { Exam } from "./components/Exam.jsx";
import { ValidationForm } from "./components/ValidationForm.jsx";
import { APIDemo } from "./components/apis/APIDemo.jsx";
import { MovieCards } from "./components/apis/MovieCards.jsx";
import { Imdb } from "./components/apis/Imdb.jsx";
import { APIDemo2 } from "./components/apis/APIDemo2.jsx";
import { UseMemo } from "./components/apis/UseMemo.jsx";
import { EditUser } from "./components/apis/EditUser.jsx";
import { Bomb } from "./components/Bomb.jsx";
import { Home } from "./components/Home.jsx";
import { Login } from "./components/Login.jsx";
import { MemoryGame } from "./components/MemoryGame.jsx";
import { Product } from "./components/Product.jsx";
import { Bank } from "./components/Bank.jsx";

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
                    <Route path="/navbar/memorygame" element={<MemoryGame />}></Route>
                    <Route path="/navbar/product" element={<Product />}></Route>
                    <Route path="/navbar/bank" element={<Bank />}></Route>

                    <Route path="/*"></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Exam } from "./components/Exam";
import { ValidationForm } from "./components/ValidationForm";
import { APIDemo } from "./components/apis/APIDemo";
import { MovieCards } from "./components/apis/MovieCards";
import { Imdb } from "./components/apis/Imdb";
import { APIDemo2 } from "./components/apis/APIDemo2";

function App() {
    return (
        <div className="w-full max-h-fit py-2 px-4 bg-gray-200">
            <Navbar></Navbar>
            <Routes>
                <Route path="/navbar/form" element={<Form></Form>}></Route>
                <Route path="/navbar/exam" element={<Exam></Exam>}></Route>
                <Route path="/navbar/validationform" element={<ValidationForm />}></Route>
                <Route path="/navbar/apidemo" element={<APIDemo />}></Route>
                <Route path="/navbar/movies" element={<MovieCards />}></Route>
                <Route path="/navbar/movies/moivedetails/:id" element={<Imdb />}></Route>
                <Route path="/navber/apidemo2" element={<APIDemo2 />}></Route>
            </Routes>
        </div>
    );
}

export default App;

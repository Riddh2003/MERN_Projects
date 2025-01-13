import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Exam } from "./components/Exam";

function App() {
  return (
    <div className="w-full max-h-fit py-2 px-4 bg-gray-200">
      <Navbar></Navbar>
      <Routes>
        <Route path="/navbar/form" element={<Form></Form>}></Route>
        <Route path="/navbar/exam" element={<Exam></Exam>}></Route>
      </Routes>
    </div>
  );
}

export default App;

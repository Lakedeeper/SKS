import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./Pages/LoginMain";
import Navbar from "./Component/Navbar";
import LoginStudents from "./Pages/LoginStudents";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginMain />} />
        <Route path="/LoginStudents" element={<LoginStudents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

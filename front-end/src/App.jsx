import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./Pages/LoginMain";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

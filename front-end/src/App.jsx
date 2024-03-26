import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./Pages/LoginMain";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

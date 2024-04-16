import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./Pages/LoginMain";
import Navbar from "./Component/Navbar";
import LoginStudents from "./Pages/LoginStudents";
import Events from "./Pages/Events";
import Clubs from "./Pages/Clubs";
import Form from "./Pages/Form";
import ContactUs from "./Pages/ContactUs";
import FormAdmin from "./Pages/FormAdmin";
import LoginStaff from "./Pages/LoginStaff";
import { StudentUserProvider } from "./StudentUserContext";
function App() {
  return (
    <BrowserRouter>
      <StudentUserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginMain />} />
          <Route path="/Clubs" element={<Clubs />} />
          <Route path="/LoginStudents" element={<LoginStudents />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FormAdmin" element={<FormAdmin />} />
          <Route path="/LoginStaff" element={<LoginStaff />} />
        </Routes>
      </StudentUserProvider>
    </BrowserRouter>
  );
}

export default App;

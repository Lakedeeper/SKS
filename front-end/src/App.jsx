import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LoginMain from "./Pages/LoginMain";
import Navbar from "./Component/Navbar";
import LoginStudents from "./Pages/LoginStudents";
import Events from "./Pages/Events";
import Clubs from "./Pages/Clubs";
import Form from "./Pages/Form";
import ContactUs from "./Pages/ContactUs";
import LoginStaff from "./Pages/LoginStaff";
import { StudentUserProvider } from "./StudentUserContext";
import Footer from "./Component/Footer";
import AdminLogin from "./Pages/AdminLogin";
import Admin from "./AdminPages/Admin";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <StudentUserProvider>
        <Routes>
          <Route path="/" element={<LoginMain />} />
          <Route path="/LoginStudents" element={<LoginStudents />} />
          <Route path="/LoginStaff" element={<LoginStaff />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />

          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path="Clubs" element={<Clubs />} />
            <Route path="Events" element={<Events />} />
            <Route path="Form" element={<Form />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="HomePage" element={<HomePage />} />
          </Route>
        </Routes>
      </StudentUserProvider>
    </BrowserRouter>
  );
}

export default App;

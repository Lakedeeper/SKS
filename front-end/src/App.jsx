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
import FormAdmin from "./Pages/FormAdmin";
import LoginStaff from "./Pages/LoginStaff";
import { StudentUserProvider } from "./StudentUserContext";
import Footer from "./Component/Footer";
import AdminLogin from "./Pages/AdminLogin";
import Admin from "./AdminPages/Admin";
import AdminClubs from "./AdminPages/AdminClubs"
import AdminEvents from "./AdminPages/AdminEvents";

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
          <Route path="/AdminClubs" element={<AdminClubs/>} />
          <Route path="/AdminEvents" element={<AdminEvents/>} />
    

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
            <Route path="FormAdmin" element={<FormAdmin />} />
          </Route>
        </Routes>
      </StudentUserProvider>
    </BrowserRouter>
  );
}

export default App;

import NavbarLogin from "../Component/NavbarLogin";
import "./LoginMain.css";
import { useNavigate } from "react-router-dom";
function LoginMain() {
  const navigate = useNavigate();

  return (
    <>
    <NavbarLogin/>
    <div className="containerMain">
      <div className="LoginTypes">
        <button className="button1" onClick={() => navigate("/AdminLogin")}>
          SKS ADMIN
        </button>
        <button className="button1" onClick={() => navigate("/LoginStaff")}>
          CLUB MANAGER
        </button>
        <button className="button1" onClick={() => navigate("/LoginStudents")}>
          STUDENT
        </button>
        <button className="WithoutLogin" onClick={() => navigate("/HomePage")}>
          continue without login
        </button>
      </div>
    </div>
   </>
  );
}

export default LoginMain;

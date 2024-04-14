import React from "react";
import "./LoginMain.css";
import { useNavigate } from "react-router-dom";
function LoginMain() {
  const navigate = useNavigate();

  return (
    <div className="containerMain">
      <div className="LoginTypes">
        <button className="button1" onClick={() => navigate("/LoginStudents")}>
          SKS ADMIN
        </button>
        <button className="button1" onClick={() => navigate("/LoginStudents")}>
          CLUB MANAGER
        </button>
        <button className="button1" onClick={() => navigate("/LoginStudents")}>
          STUDENT
        </button>
        <button className="WithoutLogin" onClick={() => navigate("/Events")}>
          continue without login
        </button>
      </div>
    </div>
  );
}

export default LoginMain;

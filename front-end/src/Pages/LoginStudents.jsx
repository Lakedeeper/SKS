import React, { useState } from "react";
import "./LoginStudents.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStudentUser } from "../StudentUserContext";

function LoginStudents() {
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { studentUser, setStudentUser } = useStudentUser();

  const handleStudent = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users");
      const users = response.data;

      const matchedUser = users.find(
        (user) =>
          user.student_number &&
          user.student_number.toString().trim() === studentID.trim() &&
          user.password === password.trim()
      );
      if (matchedUser) {
        alert("Başarılı giriş!");

        localStorage.setItem("studentUser", JSON.stringify(matchedUser));

        navigate("/HomePage");
        window.location.reload();
      } else {
        alert("Hatalı giriş ");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="containerLoginStudents">
      <div>
        <p>Log in</p>
        <input
          type="text"
          placeholder="Student ID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleStudent}>Log in</button>
      </div>
    </div>
  );
}

export default LoginStudents;

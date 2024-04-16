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

      const matchedUser = await response.data.find(
        (user) => user.email === studentID && user.password === password
      );
      if (matchedUser) {
        alert("Başarılı giriş!");
        setStudentUser(matchedUser);

        navigate("/Clubs");
      } else {
        alert("Hatalı giriş bilgileri!");
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
          type="text"
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

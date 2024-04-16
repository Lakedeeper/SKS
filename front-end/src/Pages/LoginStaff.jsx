import React, { useState } from "react";
import "./LoginStaff.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginStaff() {
  const [clubEmail, setClubEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleStudent = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/club_admins");

      const matchedUser = await response.data.find(
        (user) => user.email === clubEmail && user.password === password
      );
      if (matchedUser) {
        alert("Başarılı giriş!");

        localStorage.setItem("clubUser", JSON.stringify(matchedUser));

        navigate("/Clubs");
        window.location.reload();
      } else {
        alert("Hatalı giriş ");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="containerLoginStaff">
      <div>
        <p>Log in</p>
        <input
          type="text"
          placeholder="E-mail"
          value={clubEmail}
          onChange={(e) => setClubEmail(e.target.value)}
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

export default LoginStaff;

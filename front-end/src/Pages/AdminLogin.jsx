import React, { useState } from "react";
import "./AdminLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(adminEmail);
  console.log(password);

  const handleStudent = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/sks_admin");

      const matchedUser = await response.data.find(
        (user) => user.email === adminEmail && user.password === password
      );

      console.log(matchedUser);
      if (matchedUser) {
        alert("Başarılı giriş!");

        localStorage.setItem("adminEmail", JSON.stringify(matchedUser));

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
          value={adminEmail}
          onChange={(e) => setAdminEmail(e.target.value)}
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

export default AdminLogin;

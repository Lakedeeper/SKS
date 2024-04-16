import React, { createContext, useContext, useState } from "react";

const StudentUserContext = createContext();

export const StudentUserProvider = ({ children }) => {
  const [studentUser, setStudentUser] = useState(null);
  const [clubUser, setClubUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  return (
    <StudentUserContext.Provider
      value={{
        studentUser,
        setStudentUser,
        clubUser,
        setClubUser,
        adminUser,
        setAdminUser,
      }}
    >
      {children}
    </StudentUserContext.Provider>
  );
};

export const useStudentUser = () => useContext(StudentUserContext);

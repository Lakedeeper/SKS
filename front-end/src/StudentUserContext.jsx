import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const StudentUserContext = createContext();

export const StudentUserProvider = ({ children }) => {
  const [studentUser, setStudentUser] = useState(null);
  const [clubUser, setClubUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [component, setComponents] = useState("");
  return (
    <StudentUserContext.Provider
      value={{
        studentUser,
        setStudentUser,
        clubUser,
        setClubUser,
        adminUser,
        setAdminUser,
        component,
        setComponents,
      }}
    >
      {children}
    </StudentUserContext.Provider>
  );
};

export const useStudentUser = () => useContext(StudentUserContext);
StudentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

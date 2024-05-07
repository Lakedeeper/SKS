import AdminClubs from "./AdminClubs";
import AdminEvents from "./AdminEvents";
import AdminNavbar from "./AdminNavbar";
import { useStudentUser } from "../StudentUserContext";
// import AdminMain from "./AdminMain";
import Forms from "./Forms";

function Admin() {
  const { component } = useStudentUser();
  return (
    <>
      <AdminNavbar />
      {component === "adminForm" ? (
        <Forms />
      ) : component === "adminClubs" ? (
        <AdminClubs />
      ) : component === "adminEvents" ? (
        <AdminEvents />
      ) : (
        <Forms />
      )}
    </>
  );
}

export default Admin;

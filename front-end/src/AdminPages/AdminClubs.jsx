import "../AdminPages/AdminClubs.css";
import { useState, useEffect } from "react";
import axios from "axios";
function AdminClubs() {
  const [clubs, setClub] = useState([]);

  const [selectedClub, setSelectedClub] = useState(null);

  console.log(selectedClub);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/clubs");
        console.log(response.data);
        setClub(response.data);
        console.log(clubs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = () => {};

  return (
    <div>
      <table
        className="table table-success table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Club Name</th>
            <th scope="col">Club Manager</th>
            <th scope="col">Mail Adress</th>
            <th scope="col">Date</th>
            <th style={{ color: "black" }}>.</th>
          </tr>
        </thead>

        <tbody>
          {clubs.map((club, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{clubs?.club_name}</td>
              <td>{club?.club_name}</td>
              <td>{club?.club_name}</td>
              <td>{club?.created_at}</td>
              <td>
                <div className="ReviewButtonAdmin">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setSelectedClub(club)}
                  >
                    Review
                  </button>
                  <button
                    style={{ marginLeft: "5px", backgroundColor: "red" }}
                    onClick={() => handleDelete(club.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        className="btn btn-warning"
        style={{ marginLeft: "8px" }}
      >
        + Add Club{" "}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Club Name:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body ModalFormBody"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>
                Club name: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolorum, harum!
              </p>
              <p>Club Manager:{selectedClub?.club_name} </p>
              <p>Mail Address:{selectedClub?.club_name} </p>
              <p>Description:{selectedClub?.club_name} </p>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminClubs;

import { useState, useEffect } from "react";
import React from "react";
import "./Clubs.css";
import axios from "axios";

function Clubs() {
  const [clubs, setClub] = useState([]);

  const [selectedClub, setSelectedClub] = useState(null); //arif burada klüp bilgilerini tutuyoruz modalda kullanıcaz :)

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

  return (
    <div className="container">
      <h1 style={{ marginTop: "75px" }}>CLUBS</h1>
      <div className="row">
        {clubs.map((clubs) => (
          <div className="col-md-3" key={clubs.id}>
            <div className="card">
              <img
                src={clubs.club_logo}
                alt="Resim"
                style={{ height: "300px", objectFit: "cover" }} //resimin boyutunu container a  göre ayarlamak için objectFit = cover ekledim.
              />
              <div className="card-body">
                <h5 className="card-title">{clubs.club_name}</h5>
                <p className="card-text">{clubs.club_exp}</p>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{
                      width: "100%",
                      backgroundColor: "#C0E4D6",
                      color: "black",
                    }}
                    onClick={() => setSelectedClub(clubs)}
                  >
                    Kulüp Detay
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src={selectedClub !== null ? selectedClub.club_logo : ""}
                alt=""
                style={{ width: "200px", height: "180px", marginRight: "10px" }}
              />
              <div className="clubs_Header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {selectedClub !== null ? selectedClub.club_name : ""}
                </h1>
                <p>Club Manager: /club manager/</p>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setSelectedClub(null)}
              />
            </div>
            <div className="modal-body">
              <p
                style={{
                  margin: "10px 10px",
                  backgroundColor: "antiquewhite",
                  borderRadius: "10px",
                  padding: "8px",
                }}
              >
                uu.sks@gmail.com
              </p>
              <p style={{ margin: "10px 10px" }}>
                {selectedClub !== null ? selectedClub.club_exp : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;

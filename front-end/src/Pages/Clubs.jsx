import { useState, useEffect } from "react";
import React from "react";
import "./Clubs.css";

function Clubs() {
  const [clubs, setClub] = useState([
    {
      id: "1",
      baslik: "Kart Başlık 1",
      icerik: "Kart içeriği buraya gelebilir.",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/222/uskubat-kulubu.png",
    },
    {
      id: "2",
      baslik: "Kart Başlık 2",
      icerik: "Kart içeriği buraya gelebilir.",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/195/insani-degerler-ve-etik-kulubu.jpg",
    },
    {
      id: "2",
      baslik: "Kart Başlık 3",
      icerik: "Kart içeriği buraya gelebilir.",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/214/fablab-girisimcilik-kulubu.PNG",
    },
  ]);

  useEffect(() => {
    // axios
    //   .get("https://api.example.com/kartlar")
    //   .then((response) => setClub(response.data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginTop: "75px" }}>CLUBS</h1>
      <div className="row">
        {clubs.map((clubs) => (
          <div className="col-md-3" key={clubs.id}>
            <div className="card">
              <img
                src={clubs.resim}
                alt="Resim"
                style={{ height: "300px", objectFit: "cover" }} //resimin boyutunu container a  göre ayarlamak için objectFit = cover ekledim.
              />
              <div className="card-body">
                <h5 className="card-title">{clubs.baslik}</h5>
                <p className="card-text">{clubs.icerik}</p>
                <div>
                  <a
                    href="#"
                    className="btn "
                    style={{ width: "100%", backgroundColor: "#C0E4D6" }}
                  >
                    Daha Fazla
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;

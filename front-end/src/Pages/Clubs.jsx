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
      icerik: "Kart içeriği buraya gelebilir2.",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/195/insani-degerler-ve-etik-kulubu.jpg",
    },
    {
      id: "3",
      baslik: "Kart Başlık 3",
      icerik: "Kart içeriği buraya gelebilir3.",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/214/fablab-girisimcilik-kulubu.PNG",
    },
  ]);

  const [selectedClub, setSelectedClub] = useState(null); //arif burada klüp bilgilerini tutuyoruz modalda kullanıcaz :)

  console.log(selectedClub);

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
        src={selectedClub !== null ? selectedClub.resim : ""}
        alt=""
        style={{ width: "160px", height: "150px", marginRight: "10px" }}
    />
    <div className="clubs_Header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">
            {selectedClub !== null ? selectedClub.baslik : ""}
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
             <p style={{margin: "10px 10px",backgroundColor:"antiquewhite",borderRadius:"10px",padding:"8px"}}>uu.sks@gmail.com</p>
              <p style={{margin: "10px 10px"}}>Kulüp açıklaması: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt vel officiis ullam vitae inventore, culpa earum animi non nam tempore.</p>
        
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clubs;

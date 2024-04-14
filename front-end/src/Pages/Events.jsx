import React from "react";
import { useState, useEffect } from "react";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([
    {
      id: "1",
      baslik: "Kart Başlık 1",
      icerik: "Kart içeriği 1",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/222/uskubat-kulubu.png",
    },
    {
      id: "2",
      baslik: "Kart Başlık 2",
      icerik: "Kart içeriği 2",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/195/insani-degerler-ve-etik-kulubu.jpg",
    },
    {
      id: "3",
      baslik: "Kart Başlık 3",
      icerik: "Kart içeriği 3",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/214/fablab-girisimcilik-kulubu.PNG",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null); //arif burada  da event bilgilerini tutuyoruz modalda kullanıcaz :)

  console.log(selectedEvent);

  useEffect(() => {
    // axios
    //   .get("https://api.example.com/kartlar")
    //   .then((response) => setEvents(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="EventsHeader" style={{ marginTop: "75px" }}>
          EVENTS
        </h1>
        {events.map((event) => (
          <div className="col-md-3" key={event.id}>
            <a
              onClick={() => setSelectedEvent(event)}
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <div className="card cardEvent">
                <img
                  src={event.resim}
                  alt="Resim"
                  style={{ height: "300px", objectFit: "cover" }} //resimin boyutunu container a  göre ayarlamak için objectFit = cover ekledim.
                />
                <div className="card-body">
                  <h5 className="card-title">{event.baslik}</h5>
                  <p className="card-text">{event.icerik}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div
        className="modal fade"
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
        src={selectedEvent !== null ? selectedEvent.resim : ""}
        alt=""
        style={{ width: "200px", height: "180px", marginRight: "10px" }}
            />
            <div className="headerEventsModal">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {selectedEvent !== null ? selectedEvent.baslik : ""}
              </h1>
              <p>Öğretim üyesi : /isim soyisim/</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {selectedEvent !== null ? selectedEvent.icerik : ""}
             
            </div>
            <p style={{marginLeft:"15px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam iste dignissimos minus et omnis possimus tenetur quod, magni repudiandae aliquid, autem reprehenderit optio fuga voluptatibus dolor consectetur modi, incidunt odio.</p>
            <div className="modal-footer">
             <h6>Event Informations:</h6> 
            </div>
            <p style={{marginLeft:"15px"}}>Event date and time: Tarih - Saat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;

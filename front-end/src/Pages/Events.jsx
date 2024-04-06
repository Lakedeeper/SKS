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
      id: "2",
      baslik: "Kart Başlık 3",
      icerik: "Kart içeriği 3",
      resim:
        "https://uskudar.edu.tr/assets/uploads/ogrencikulup/214/fablab-girisimcilik-kulubu.PNG",
    },
  ]);

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
          <div className="col-md-3">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;

import { useState, useEffect } from "react";
import "./Events.css";
import axios from "axios";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); //arif burada  da event bilgilerini tutuyoruz modalda kullanıcaz :)

  console.log("selected", selectedEvent);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");
        const published = response.data.filter(
          (form) => form.state.trim() === "published"
        );
        setEvents(published);
        setOriginalEvents(response.data);
        console.log("published",published);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const HandleSearch = () => {
    const filteredEvents = originalEvents.filter((event) =>
      event.event_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setEvents(filteredEvents);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="EventsHeader" style={{ marginTop: "75px" }}>
          EVENTS
        </h1>
        <hr />
        <div className="searchBarEvents">
          <CalendarMonthIcon />
          <input className="Input1Events" type="date" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="Input2Events"
            type="text"
          />
          <button onClick={HandleSearch}>Search</button>
        </div>
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
                  src={event.image}
                  alt="Resim"
                  style={{ height: "300px", objectFit: "cover" }} //resimin boyutunu container a  göre ayarlamak için objectFit = cover ekledim.
                />
                <div className="card-body">
                  <h5 className="card-title">{event.event_name}</h5>
                  <p className="card-text">{event.start_of_event}</p>
                  <p className="card-text">{event.end_of_event}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <div className="d-flex align-items-center">
          <img src={selectedEvent !== null ? selectedEvent.image : ""} alt="" style={{ width: "200px", height: "180px", marginRight: "10px" }} />
          <div className="headerEventsModal">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {selectedEvent !== null ? selectedEvent.event_name : ""}
            </h1>
          </div>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        {selectedEvent !== null ? selectedEvent.event_subject : ""}
      </div>
      <p style={{ marginLeft: "15px" }}>
        {selectedEvent !== null ? selectedEvent.event_type : ""}
      </p>
      <div className="modal-footer justify-content-between">
        <div>
          <h6>Event Informations:</h6>
          {selectedEvent !== null ? selectedEvent.adress : ""}
        </div>
        <p style={{ marginLeft: "15px" }}>
          {selectedEvent !== null ? selectedEvent.start_of_event : ""} - {selectedEvent !== null ? selectedEvent.end_of_event : ""} - {selectedEvent !== null ? selectedEvent.time : ""}
        </p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Events;

import "../AdminPages/AdminEvents.css";
import { useState, useEffect } from "react";
import axios from "axios";
function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  console.log(selectedEvent);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/events");
        console.log(response.data);
        setEvents(response.data);
        console.log(events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{
      marginRight: "10px",
      marginLeft: "170px",
    }}>
      <table 
        className="table table-success table-striped"
        style={{width:'100%'}}
      >
        <thead>
          <tr className="table-dark">
            <th scope="col">#</th>
            <th scope="col">Club Name</th>
            <th scope="col">Event Name</th>
            <th scope="col">Club Manager</th>
            <th scope="col">Speaker - Guest</th>
            <th scope="col">Date</th>
            <th style={{ color: "black" }}>.</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <th scope="row">1</th>
              <td>{event?.event_name}</td>
              <td>{event?.event_name}</td>
              <td>{event?.event_name}</td>
              <td>{event?.event_name}</td>
              <td>{event?.event_name}</td>
              <td>
                <div className="ReviewButtonAdmin">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setSelectedEvent(event)}
                  >
                    Review
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src="https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fkalp-damar-cerrahisinde-perfuzyon-44723.jpg%3Ft%3D1711322825&w=828&q=75"
                alt=""
              />
              <h1
                style={{ alignItems: "center" }}
                className="modal-title fs-5"
                id="exampleModalLabel"
              >
                Event Name
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
              <p>Event Type:{selectedEvent?.event_name} </p>
              <p>Event Name:{selectedEvent?.event_name} </p>
              <p>Day: {selectedEvent?.event_name} </p>
              <p>Time: {selectedEvent?.event_name} </p>
              <p>Subject:{selectedEvent?.event_name} </p>
              <p>Number Of Participant {selectedEvent?.event_name} </p>
              <p>The place:{selectedEvent?.event_name} </p>
              <p>Club Manager:{selectedEvent?.event_name} </p>
            </div>
            <div className="modal-footer">
              <button
                style={{ backgroundColor: "red", color: "white" }}
                type="button"
                className="btn"
                data-bs-dismiss="modal"
              >
                Red
              </button>
              <button
                style={{ backgroundColor: "green", color: "white" }}
                type="button"
                className="btn"
              >
                Onay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminEvents;

import { useState, useEffect } from "react";
import "./HomePage.css";
import HomePageMain from "../assets/HomePageMain.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [events, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/forms");
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/clubs");
        console.log(response.data);
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchData2();
  }, []);

  return (
    <>
      <div style={{ fontSize: "35px" }} className="HeaderHomePage">
        Home Page
      </div>
      <div className="HomePageContainer">
        <div className="MainHomePage">
          <div className="MainHomePageContent">
            <div>
              <Link to="/events">
                <img className="MainHomePageImage" src={HomePageMain} alt="" />
              </Link>
            </div>
            <div className="MainHomePageCenteredText">
              <p style={{ fontSize: "50px" }}>STU-EVENT</p>
              <p style={{ fontSize: "50px" }}>All of my hope is in the youth</p>
              <p style={{ fontSize: "50px" }}>Mustafa Kemal Atatürk</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "550px", display: "flex" }}>
        <div>
          <h1>Events</h1>
        </div>
        <div style={{ marginLeft: "600px" }}>
          <h1>Clubs</h1>
        </div>
      </div>
      <div
        className="TotalSecondDiv"
        style={{
          marginBottom: "200px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            fontStyle: "italic",
            marginBottom: "200px",
            marginTop: "100px",
          }}
          className="carousel-container "
        >
          <div
            id="carouselExample1"
            className="carousel slide carouselHP"
            style={{
              width: "500px",
              height: "300px",
            }}
          >
            <div className="carousel-inner">
              {events.map((event, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={event.id}
                >
                  <a href="events">
                    <img
                      src={event.image}
                      className="d-block w-100"
                      alt="Event"
                    />
                  </a>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample1"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                style={{ backgroundColor: "black" }}
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample1"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                style={{ backgroundColor: "black" }}
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div
          style={{
            width: "300px",
            height: "300px",
            fontStyle: "italic",
            marginLeft: "300px",
          }}
          className="carousel-container"
        >
          <div
            id="carouselExample2"
            className="carousel slide carouselHP"
            style={{
              width: "250px",
              height: "100px",
              marginBottom: "200px",
            }}
          >
            <div className="carousel-inner">
              {clubs.map((club, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={club.id}
                >
                  <a href="clubs">
                    <img
                      src={club.club_logo}
                      className="d-block w-100"
                      alt="Club"
                    />
                  </a>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample2"
              data-bs-slide="prev"
            >
              <span
                style={{ backgroundColor: "black" }}
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample2"
              data-bs-slide="next"
            >
              <span
                style={{ backgroundColor: "black" }}
                className="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

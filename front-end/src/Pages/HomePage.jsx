  import React from 'react';
  import './HomePage.css';
  import HomePageMain from '../assets/HomePageMain.jpg';
  import { Link } from 'react-router-dom';

  function HomePage() {
    return (
      <> 
        <div style={{fontSize:'35px'}} className='HeaderHomePage'>Home Page</div>
        <div className='HomePageContainer'>
          <div  className='MainHomePage'>
            <div className='MainHomePageContent'>
              <div>
                <Link to="/events">
                  <img className='MainHomePageImage' src={HomePageMain} alt="" />
                </Link>
              </div>
              <div className='MainHomePageCenteredText'>
                <p style={{fontSize:'50px'}}>STU-EVENT</p>
                <p style={{fontSize:'50px'}}>"All of my hope is in the youth"</p>
                <p style={{fontSize:'50px'}}>Mustafa Kemal Atatürk</p>
              </div>
            </div>
          </div>    
        </div>

        <div className='TotalSecondDiv'>
        
          <div style={{width:'300px',height:'300px',fontStyle:'italic'}} className="carousel-container">
            <p>Events</p>
            <div id="carouselExample1" className="carousel slide carouselHP">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="events"><img
                  src="https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fiftar-etkinligi-44735.jpg%3Ft%3D1711376863&w=828&q=75"
                    className="d-block w-100"
                  />
                  </a>
                </div>
                <div className="carousel-item">
                <a href="events"> <img
                    src="https://sks.uskudar.edu.tr/_next/image?url=https%3A%2F%2Fcdn.sks.uskudar.edu.tr%2Fcontent%2Fimages%2Fiftar-etkinligi-44735.jpg%3Ft%3D1711376863&w=828&q=75"
                    className="d-block w-100"
                  />
                  </a>
                </div>
              
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample1"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample1"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div style={{width:'300px',height:'300px',fontStyle:'italic'}} className="carousel-container">
            <p>Clubs</p>
            <div id="carouselExample2" className="carousel slide carouselHP">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <a href="clubs"> <img
                    src="https://sks.uskudar.edu.tr/_next/image?url=%2Flogo-en.png&w=128&q=100"
                    className="d-block w-100"
                  />
                  </a>
                </div>
                <div className="carousel-item">
                <a href="clubs"> <img
                    src="https://sks.uskudar.edu.tr/_next/image?url=%2Flogo-en.png&w=128&q=100"
                    className="d-block w-100"
                  />
                  </a>
                </div>
                
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample2"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample2"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default HomePage;

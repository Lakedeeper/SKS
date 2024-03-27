import React from 'react'
import './Events.css'


function Events() {
  return (

<div className="container">
      <div className="row">
        <h1 className='EventsHeader' style={{ marginTop: "75px" }}>EVENTS</h1>
        <div className="col-md-3">
          <div className="card cardEvent">
            <img
              src="https://uskudar.edu.tr/assets/uploads/ogrencikulup/222/uskubat-kulubu.png"
              alt="Resim"
            />
            <div className="card-body">
              <h5 className="card-title">Kart Başlık 1</h5>
              <p className="card-text">Kart içeriği buraya gelebilir.</p>
              
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card cardEvent">
            <img
              src="https://uskudar.edu.tr/assets/uploads/ogrencikulup/222/uskubat-kulubu.png"
              className="card-img-top"
              alt="Resim"
            />
            <div className="card-body">
              <h5 className="card-title">Kart Başlık 1</h5>
              <p className="card-text">Kart içeriği buraya gelebilir.</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
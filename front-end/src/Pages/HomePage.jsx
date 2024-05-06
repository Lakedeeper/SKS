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
        <div><Link to="/events">
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
    </>
  );
}

export default HomePage;

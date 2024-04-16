import React from 'react'
import "./ContactUs.css";
import harita from "../assets/harita.png"

function ContactUs() {
  return (

<div className='allPageElf'>
   
    <div className='headerContactUs'>Contact Us</div>

    <div className='allPage'>
    
    <div className='InformationBox'>
<div className='Information'>
    <p><strong>E-Mail: </strong>sks@uskudar.edu.tr</p>
    <p><strong>Phone Number:</strong> +90 216 400 22 22</p>
    <p><strong>Address: </strong>Altunizade Mh. Üniversite sk. no:14 34662 Üsküdar/ Istanbul / TR</p>
</div>
<div className='haritaImageContactUs'><img src={harita} alt="" /></div>
    </div>
    </div>
    </div>
    
  )
}

export default ContactUs
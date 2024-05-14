import React from "react";
import "./Footer.css";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";

import uulogo from "../assets/uulogo.png";
import logoIG from "../assets/ıg.png";
import logoX from "../assets/x.jpeg";
import logoYT from "../assets/yt.png";
import logoFB from "../assets/fb.png";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="firstColumnFooter">
        <div className="firstRowImage">
          <img src={uulogo} alt="" />
        </div>
        <div className="secondRowText">
          <p>© 2011 - 2024 T.C. Üsküdar Üniversitesi Her Hakkı Saklıdır.</p>
        </div>
      </div>
      <div className="secondColumnFooter">
        <div>
          {" "}
          <MailIcon /> sks@uskudar.edu.tr
        </div>
        <div>
          {" "}
          <PhoneIcon /> +90 216 400 22 22
        </div>
        <div>
          {" "}
          <BusinessIcon /> Altunizade Mh. Üniversite Sokağı No:14 34662 Üsküdar
          / İstanbul / Türkiye
        </div>
      </div>
      <div className="thirdColumnFooter">
        <div className="socialAccountsFooter">
          <a href="https://www.facebook.com/uskudarsks/">
            {" "}
            <img src={logoFB} alt="" />{" "}
          </a>
        </div>
        <div className="socialAccountsFooter">
          <a href="https://twitter.com/uskudarsks">
            {" "}
            <img src={logoX} alt="" />
          </a>
        </div>
        <div className="socialAccountsFooter">
          <a href="https://www.youtube.com/@uskudaruniversitesisksdair3366">
            {" "}
            <img src={logoYT} alt="" />
          </a>
        </div>
        <div className="socialAccountsFooter">
          <a href="https://www.instagram.com/uskudarsks/?hl=en">
            {" "}
            <img src={logoIG} alt="" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

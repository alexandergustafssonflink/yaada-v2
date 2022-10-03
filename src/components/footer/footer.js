import React from "react";
import './footer.css';
import logo from '../../images/logo.svg';


function Footer() {
  return (
        <div id="contact">
            <div className="container footer-wrapper">
                <img src={logo} alt="" />
                <div className="company-info">
                    <div className="address">
                        <p> Fribergsgatan 6</p>
                        <p> 412 60 Göteborg</p>
                    </div>
                    <div className="contact">
                        <p>0708 63 86 11</p>
                        <a href="mailto:hola@yaada.se"><p>hola@yaada.se</p></a>
                    </div>
                </div>
            </div>
        </div>
  );
}



export default Footer;

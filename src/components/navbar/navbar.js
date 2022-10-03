import { Link } from "react-router-dom";
import './navbar.css';
import React,  { useEffect, useRef } from "react";

function NavBar() {
    const input = useRef(null);
    useEffect(() => {
        console.log(input.current.checked);
      }, [input]);

    function closeMenu() {
        input.current.checked = false;
    }
    return (
        <div className="navbar">
            <label>
                <input type="checkbox" ref={input} />
                <span className="menu"> <span className="hamburger"></span> </span>
                <ul>
                    <li onClick={closeMenu}><a href="#home"><h5>Hem</h5></a></li>
                    <li onClick={closeMenu}><a href="#about"><h5>Vi erbjuder</h5></a></li>
                    <li onClick={closeMenu}><a href="#cases"><h5>Case</h5></a></li>
                    <li onClick={closeMenu}><a href="#contact"><h5>Kontakt</h5></a></li>
                </ul>
            </label>
        </div>
  );
}



export default NavBar;

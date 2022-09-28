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
                    <li onClick={closeMenu}><Link to="/"><h5>Home</h5></Link></li>
                    <li onClick={closeMenu}><Link to="/hej"><h5>About</h5></Link></li>
                    <li onClick={closeMenu}><Link to="/hej"><h5>Contact</h5></Link></li>
                </ul>
            </label>
        </div>
  );
}



export default NavBar;

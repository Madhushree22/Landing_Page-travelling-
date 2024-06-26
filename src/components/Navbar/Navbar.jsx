import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"; //icons
import { GiRollingSuitcase } from "react-icons/gi";//icons
import './Navbar.css';
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <span style={{ color: "#FFFFFF" }}><span style={{ fontSize: "200%" }}><b>F</b></span>LYNATIONS</span>
            </div>


            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#designation">Designation</a></li>
                <li className="p__opensans"><a href="#packages">Packages</a></li>
                <li className="p__opensans"><a href="#gallery">Gallery</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>

            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">Log In / Registration</a>
                <div />
                <a href="/" className="p__opensans">Book Now</a>
            </div>



            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} className="overlay__open" />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <GiRollingSuitcase fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#designation" onClick={() => setToggleMenu(true)}>Desgination</a></li>
                            <li><a href="#packages" onClick={() => setToggleMenu(false)}>Packages</a></li>
                            <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
                            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};



export default Navbar
import React from "react";
import './Footer.css';
import logo from "../../pics/Mlogo.jpeg";



const Footer = () => {

    return (
        <footer className="footer">
            <section className="footerTop">
                <div className="footercontainer">
                    <div className="footerRow">
                        <nav className="footerNav">
                            <ul className="footerMenu" aria-label="footer navigation menu">
                                <li className="footerItem"><a href="#about" className="footerLink">About MindM</a></li>
                                <li className="footerItem"><a href="#careers" className="footerLink">Careers</a></li>
                                <li className="footerItem"><a href="#blog" className="footerLink">Blog</a></li>
                                <li className="footerItem"><a href="#partners" className="footerLink">Our Partners</a></li>
                                <li className="footerItem"><a href="#contact" className="footerLink">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="footerMiddle">
                <div className="footerwrapper">
                    <div className="row">
                        <div className="col-md mt-5">
                            <a href="/" className="logo-image" title="Visit home page of MindM">
                                <img src={logo} alt="MindM" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footerBottom bg-primary text-align text-center">
                <p>Privacy Policy | © 2023 MindM all rights reserved</p>
            </section>
        </footer>
    );
};

export default Footer;
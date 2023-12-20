import React from "react";
import './Footer.css';



const Footer = () => {

    return (
        <footer className="footer">
            <section className="footerTop">
                <div className="footercontainer">
                    <div className="footerRow">
                        <nav className="footerNav">
                            <ul className="footerMenu" aria-label="footer navigation menu">
                                <li className="footerItem"><a href="#about" className="footerLink">About MindArc</a></li>
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
                            <a href="https://www.mindarc.com.au" className="logo-image" title="Visit home page of MindArc">
                                <img src="https://www.mindarc.com.au/cdn/shop/t/5/assets/mindarc-logo-white.png?v=169087862988360412781587262100" alt="MindArc" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footerBottom bg-primary text-align text-center">
                <p>Privacy Policy | © 2023 MindArck all rights reserved</p>
            </section>
        </footer>
    );
};

export default Footer;
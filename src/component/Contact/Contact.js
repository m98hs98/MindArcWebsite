import React from "react";
import './Contact.css';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Contact = () => {

    return (
        <div className="contact-section">
            <div className="contactContainer py-9">
                <div className="contactRow">
                    <div className="contactCol contactCol-md-4">
                        <h2 className="font-weight-bold">Our <br/> Team <br/> Is Ready <br/> To Help.</h2>
                    </div>
                    <div className="contactCol contactCol-md-4">
                        <h5>Reach Out</h5>
                        <p>Call us on 1300 346 937</p>
                        <p>Email: hello@mindm.com.au</p>
                        <p>We're open 9am - 5pm weekdays</p>
                        <p>Start a conversation...</p>
                        <a className="contactButton contactButton-primary action-arrow" href="/pages/contact-us">Lets Talk</a>
                    </div>
                    <div className="contactCol contactCol-md-4">
                        <h5>Headquarters</h5>
                        <p>4 Australia St</p>
                        <p>Macquarie Park NSW 2113</p>
                        <a className="customButton customButton-primary action-arrow" href="https://www.google.com/search?q=company+address" target="">Get Directions</a>
                    </div>
                    <div className="contactCol contactCol-md-4">
                        <h5>Follow Us</h5>
                        <ul className="contactSocialList d-flex">
                            <li className="mr-3"><a href="https://www.facebook.com" title="Follow Us on Facebook"><FaFacebookF /></a></li>
                            <li className="mr-3"><a href="https://www.instagram.com" title="Follow Us on instagram"><FaInstagram /></a></li>
                            <li className="mr-3"><a href="https://www.linkedin.com" title="Follow Us on linkedin"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
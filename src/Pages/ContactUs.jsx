import React from "react";
import './ContactUs.css';
import FBlogo from '../Assets/facebooklogo.png';

export default () => (
    <div className="contactUs"> 
        <h1 className="contactHeader">Contact Us</h1>
        <p className="contactParagraph">If you would like to reach out to us in order to ask us for anything regarding Dynami, email us at:</p>
        <h2 className="emailSubheader">dynamiproject@gmail.com</h2>
        <p className="contactParagraph">Add us on social media!</p>
        <div className = "imageDiv">
        <   img src={FBlogo} className="FBlogo" alt="facebook logo" />
        </div>
    </div>
);
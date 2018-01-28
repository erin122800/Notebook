import React from "react";
import './ContactUs.css';
import FBlogo from '../Assets/facebooklogo.png';
import TWlogo from '../Assets/twitterlogo.png';

export default () => (
    <body className="contactBody">
        <div className="contactUs"> 
            <h1 className="contactHeader">Contact Us</h1>
            <p className="contactParagraph">If you would like to reach out to us in order to ask us for anything regarding Dynami, email us at:</p>
            <h2 className="emailSubheader">dynamiproject@gmail.com</h2>
            <p className="contactParagraph">Add us on social media!</p>
            <div className = "imageDiv">
                <a href="https://www.facebook.com/Dynami-Project-1002872376531590/">
                <   img src={FBlogo} className="FBlogo" alt="facebook logo" />
                </a>
                <a href="https://twitter.com/ProjectDynami">
                <   img src={TWlogo} className="TWlogo" alt="twitter logo" />
                </a>
            </div>
        </div>
    </body>
);
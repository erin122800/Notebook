import React from "react";
import './Resources.css';
import Parallax from 'react-lazy-parallax';

export default () => (
    <div> 
        <h1>Resources</h1>
        <p className = "locationsText">Currently, we have locations in New York, Pennsylvania, and Ohio, where anyone can come and receive the help that they need. Our therapists will be available during hours to listen to your situation, offer advice, and more. We are always looking to expand and offer our locations across the nation. These are our addresses:</p>
        <ul className = "locationsList">
        <li><b>New York</b>: 1025 Old Country Road, Westbury, NY 11590</li>
        <li><b>Pennsylvania</b>: 121 Summit Street, Darby, PA 19023</li>
        <li><b>Ohio</b> : 2830 Napoleon Road, Fremont, OH 43420</li>
        </ul>
        <h1>Testimonials</h1>
        <p className = "testimonialText">If you, a friend, or a relative have been helped by Dynami, feel free to leave a testimonial about it! If you do not want to share your name, put "Anonymous" in the name submission form.</p>
        <form action>
            <p>Name:</p>
            <input className = "nameInput" type="text" name = "name"/>
            <br></br>
            <p>Testimonial:</p>
            <textarea className = "testimonialInput" rows="4" columns="50"/>
            <br></br>
            <input type="submit" value = "submit"/>
        </form>
    </div>
);
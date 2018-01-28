import React from "react";
import './Resources.css';
import Parallax from 'react-lazy-parallax';

export default () => (
    <div> 
        <h1>Resources</h1>
        <p className = "locationsText">Currently, we have locations in Ohio, New York, and Pennsylvania, where anyone can come and receive the help that they need. Our therapists will be available during hours to listen to your situation, offer advice, and more. We are always looking to expand and offer our locations across the nation. Search for a location in your zip code:</p>
        <input className = "zipcodeInput"></input>
        <div className = "locationsTextArea">
        </div>

        <h1>Testimonials</h1>
        <p className = "testimonialText">If you, a friend, or a relative have been helped by Dynami, feel free to leave a testimonial about it! If you do not want to share your name, put "Anonymous" in the name submission form.</p>;
        <form action>
            Name: <input className = "nameInput" type="text" name = "name"/>
            Testimonal: <input className = "testimonialInput" type = "text" name = "testimonial"/>
            <input type="submit" value = "submit"/>
        </form>
    </div>
);
import React from "react";
import "./Testimonial.css"

export default ({ name, testimony } = {}) => (
    <div className = "Testimonial">
        <p>Name: {name}</p>
        <p>Testimony: {testimony}</p>
        <br/>
    </div>
);

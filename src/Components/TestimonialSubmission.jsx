import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TestimonialSubmission extends Component {
    render(){
        return(
            <form action>
            <p>Name:</p>
            <input className = "nameInput" type="text" name = "name"/>
            <br></br>
            <p>Testimonial:</p>
            <textarea className = "testimonialInput" rows="4" columns="50"/>
            <br></br>
            <input type="submit" value = "submit"/>
        </form>
        );
    }
}
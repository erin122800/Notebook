import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TestimonialSubmission extends Component {
    constructor(props, context) {
        super(props, context);
        this.nameField = null;
        this.testimonialField = null;
        
    }
    sendTestimonial(evt) {
        evt.preventDefault();
        this.context.API.uploadData({
            name: this.nameField.value,
            testimony: this.testimonialField.value
        });
        return false;
    }
    render(){
        return(
            <form action>
            <p>Name:</p>
            <input className = "nameInput" type="text" name = "name" ref={el =>(this.nameField = el)}/>
            <br></br>
            <p>Testimonial:</p>
            <textarea className = "testimonialInput" rows="4" columns="50" ref={el =>(this.testimonialField = el)}/>
            <br></br>
            <input type="submit" value = "submit"/>
        </form>
        );
    }
}

TestimonialSubmission.contextTypes = {
    API: PropTypes.object
};
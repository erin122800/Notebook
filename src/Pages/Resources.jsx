import React, {Component} from "react";
import './Resources.css';
import Parallax from 'react-lazy-parallax';
import TestimonialList from '../Components/TestimonialList';
import ResourcesBG from '../Assets/ResourcesBG.jpg';
import PropTypes from 'prop-types';
import TestimonialSubmission from "../Components/TestimonialSubmission";

export default class Resources extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: null
        };
        
        this.getTestimonials = this.getTestimonials.bind(this);
    }

    async getTestimonials() {
        var data = await this.context.API.getData();
        this.setState({data});
    }
    async componentDidMount() {
        this.getTestimonials();
    }
    render(){
        return (<div>
        <h1>Resources</h1>
        <p className = "locationsText">Currently, we have locations in New York, Pennsylvania, and Ohio, where anyone can come and receive the help that they need. Our therapists will be available during hours to listen to your situation, offer advice, and more. We are always looking to expand and offer our locations across the nation. These are our addresses:</p>
        <ul className = "locationsList">
        <li><b>New York</b>: 1025 Old Country Road, Westbury, NY 11590</li>
        <li><b>Pennsylvania</b>: 121 Summit Street, Darby, PA 19023</li>
        <li><b>Ohio</b> : 2830 Napoleon Road, Fremont, OH 43420</li>
        </ul>
        <br></br>
        <br></br>
        <Parallax image={ResourcesBG} style={{minHeight: 400}} />
        <h1>Testimonials</h1>
        {this.state.data && <TestimonialList results={this.state.data}/>}
        <p className = "testimonialText">If you, a friend, or a relative has been helped by Dynami, feel free to leave a testimonial about it! If you do not want to share your name, put "Anonymous" in the name submission form.</p>
        <TestimonialSubmission onSubmit ={this.getTestimonials}/>
    </div>);
    }
}

Resources.contextTypes = {
    API: PropTypes.object
};
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
        <h2>Other Resources</h2>
        <p>There are many ways for you to get help when you need it. Here are a few resources that you can consult:</p>
        <h3><b>National Suicide Prevention Lifeline</b>: 1-800-273-8255</h3>
        <ul className = "otherResources">

        <li><a href = "https://www.stopbullying.gov/resources"> Stop Bullying Resources</a></li>
        <li><a href = "https://www.ncab.org.au/get-help/">Get Help from the National Centre Against Bullying</a></li>
        </ul>
        <h3>Resources for Children and Teens</h3>
        <ul classname = "childrenResources">
        <li><a href = "https://www.pacerkidsagainstbullying.org/">Kids Against Bullying</a></li>
        <li><a href = "https://www.pacerteensagainstbullying.org/#/home">Teens Against Bullying</a></li>
        <li><a href = "http://stompoutbullying.org/">Stomp Out Cyber Bullying and Bullying at School</a></li>
        <li><a href = "https://www.thetrevorproject.org/">The Trevor Project for LGBTQ+</a></li>
        </ul>
        <h3>Resources for Parents and Teachers</h3>
        <ul classname = "adultResources">
        <li><a href = "http://www.welcomingschools.org/">Welcoming Schools</a></li>
        <li><a href = "https://www.glsen.org/">Gay Lesbian Straight Education Network</a></li>
        <li><a href = "http://familyproject.sfsu.edu/">Family Acceptance Project</a></li>
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
import React from "react";
import './AboutUs.css';
import Parallax from 'react-lazy-parallax';
import pic1 from '../Assets/BullyBG1.jpg';
import pic2 from '../Assets/BullyBG2.jpg';

export default () => (
    <div className = "AboutUs"> 
        <h1>About Us</h1>
        <h2>Bullying is an epidemic!</h2>
        <p>Bullying happens everyday: under our noses, behind our backs, and even right to our faces. Nearly 83% of bullying victims don’t receive the help they need, On top of this, at least 3.2 million people are affected by bullying annually. The major reason students are bullied are because the bully wants to feel superior to those who appear to be easy to bully but the truth is, anyone can be bullied.</p>
        <Parallax image={pic1} style={{minHeight: 600}} />
        <p>People often don’t know what to do or how to react to bullying. Bullying can leave long lasting detrimental effects on mental and physical wellbeing. Not only that, but administrators way of dealing with the issue. Suspensions could feel like a day off for the bully involved. If suspension is not an effective way to diminish daily bullying, then we need a new solution. A website hub to offer a simple way to get options for help. Here, you can get hotlines, therapies, and peer help locations. Some people don’t know how to to speak up, where to start. This is where you can find comfortable environments to seek the help that millions across the globe need.</p>
        <Parallax image={pic2} style={{minHeight: 600}} />
    </div>
);
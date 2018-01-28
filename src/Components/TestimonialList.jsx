import React from "react";
import Testimonial from "./Testimonial";

export default ({results} = {}) => (
    <div>
        {results.map((testimony, idx) => <Testimonial name = {testimony.name} testimony = {testimony.testimony}/>)}
    </div>
);
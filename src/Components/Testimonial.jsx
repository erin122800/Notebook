import React from "react";

export default ({ name, testimony } = {}) => (
    <ul>
        <li>Name: {name}</li>
        <li>Testimony: {testimony}</li>
    </ul>
);

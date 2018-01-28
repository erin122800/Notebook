import React, { Component } from "react";
import PropTypes from "prop-types";

async function getData(uri) {
}

async function uploadData(uri, data) {
}

const API = {
    getData,
    uploadData
};

export default class TestimonialProvider extends Component {
    getChildContext() {
        return {API};
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

TestimonialProvider.childContextTypes = {
    API: PropTypes.object
};

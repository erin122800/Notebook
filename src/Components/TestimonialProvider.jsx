import React, { Component } from "react";
import PropTypes from "prop-types";

async function getData(uri) {
    var response = await fetch ("https://wctd2018-a26c.restdb.io/rest/testimonials", {
    headers: new Headers({
        "content-type": "application/json",
        "x-apikey": "5a6cf7b27d7ef24c5cf08fe7",
        "cache-control": "no-cache"
      })
    });
    var data = await response.json();
    return data;
}

async function uploadData(uri, data) {
    var response = await fetch ("https://wctd2018-a26c.restdb.io/rest/testimonials", {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json",
            "x-apikey": "5a6cf7b27d7ef24c5cf08fe7",
            "cache-control": "no-cache"
          })
        });
        var data = await response.json();
        return data;
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

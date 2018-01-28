import React, { Component } from 'react';
import logo from './Assets/logo.png';
import './App.css';
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Resources from "./Pages/Resources"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dynami</h1>
        </header>
        <AboutUs/>
        <Resources/>
        <ContactUs/>
      </div>
    );
  }
}

export default App;

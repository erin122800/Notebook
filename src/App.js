import React, { Component } from 'react';
import logo from './Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Resources from "./Pages/Resources";

const pages = [
  {name: 'About Us', component: AboutUs },
  {name: 'Resources', component: Resources },
  {name: 'Contact Us', component: ContactUs },
];


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: AboutUs
    };

    this.navigate = this.navigate.bind(this);
  }
  navigate(page) {
    this.setState({page});
  }
  render() {
    const Page = this.state.page;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dynami</h1>
        </header>
        <NavBar pages={pages} onChange={this.navigate}/>
        <Page />
      </div>
    );
  }
}

export default App;

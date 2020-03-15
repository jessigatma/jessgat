import React, { Component } from 'react';
//import logo from './logo.svg';
import Navigation from './components/navigation';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;

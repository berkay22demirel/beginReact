import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import FunctionalComponent from './components/FunctionalComponent';
import CardComponent from './components/CardComponent';

class App extends Component {
  render() {
    var testVariable = "berkay22demirel.com";
    var testVariable2 = true;
    return (
      <div className="App">
        <FunctionalComponent navbar="NAVBAR TEXT" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Berkay Demirel</h1>
          <div>Begin React</div>
          <div>{testVariable2 ? testVariable.toUpperCase() : null}</div>
          <FirstComponent typetext="text1"/>
          <FirstComponent/>
        </header>
        <section id="personnel">
          <div className="container">
            <CardComponent name="Berkay" surname="Demirel" salary="10000$" job="Computer Engineer" />
            <CardComponent />
            <CardComponent name="Berkay" surname="Demirel" salary="10000$" job="Computer Engineer" />
          </div>
          
        </section>
      </div>
    );
  }
}

export default App;

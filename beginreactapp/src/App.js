import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import FunctionalComponent from './components/FunctionalComponent';

class App extends Component {
  render() {
    var testVariable = "berkay22demirel.com";
    var testVariable2 = true;
    return (
      <div className="App">
        <FunctionalComponent></FunctionalComponent>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Berkay Demirel</h1>
          <div>Begin React</div>
          <div>{testVariable2 ? testVariable.toUpperCase() : null}</div>
          <FirstComponent />
          <FirstComponent />
        </header>
      </div>
    );
  }
}

export default App;

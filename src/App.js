import React, { Component } from 'react';
import './App.css';
import Calculator from './calculator/calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Submission CICD Pipeline Dicoding</h1>
        </header>
        <h1>
          Evando
        </h1>
        <Calculator />
      </div>
    );
  }
}

export default App;

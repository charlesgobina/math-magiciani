/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-header">
          <h1>Math Magician</h1>
          <Calculator />
        </main>
      </div>
    );
  }
}

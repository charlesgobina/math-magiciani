/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="display">
          <input id="display-main" type="text" />
        </div>
        <div className="calc-btns-wrapper">
          <div className="calc-btns">
            <button className="button" type="button" value="AC" id="clear">AC</button>
            <button className="button" type="button" value="+/-" id="pom">+/-</button>
            <button className="button" type="button" value="%" id="mod">%</button>
            <button className="button elite" type="button" value="/" id="quotient">/</button>
            <button className="button" type="button" value="7" id="seven">7</button>
            <button className="button" type="button" value="8" id="eight">8</button>
            <button className="button" type="button" value="9" id="nine">9</button>
            <button className="button elite" type="button" value="*" id="product">*</button>
            <button className="button" type="button" value="4" id="four">4</button>
            <button className="button" type="button" value="5" id="five">5</button>
            <button className="button" type="button" value="6" id="six">6</button>
            <button className="button elite" type="button" value="-" id="diff">-</button>
            <button className="button" type="button" value="1" id="one">1</button>
            <button className="button" type="button" value="2" id="two">2</button>
            <button className="button" type="button" value="3" id="three">3</button>
            <button className="button elite" type="button" value="+" id="sum">+</button>
            <button className="button" type="button" id="round">0</button>
            <button className="button" type="button" id="dot">.</button>
            <button className="button elite" type="button" id="equals">=</button>
          </div>
        </div>
      </div>
    );
  }
}

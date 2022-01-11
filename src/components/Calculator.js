import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [objj, setObjj] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    const { total, next, operation } = calculate(objj, e.target.name);
    if (e.target.name === 'AC') {
      setObjj({
        total: 0,
        next: 0,
      });
    } else {
      setObjj({ total, next, operation });
    }
  };

  const { next, total } = objj;
  return (
    <div className="wrapper">
      <div className="calcText">
        <p>Let us do some math!</p>
      </div>
      <div className="calcSection">
        <div className="display">
          { next ? (<input id="display-main" readOnly value={next} type="text" />) : <input readOnly id="display-main" value={total} type="text" /> }
        </div>
        <div className="calc-btns-wrapper">
          <div className="calc-btns">
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="AC" id="clear">AC</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="+/-" id="pom">+/-</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="%" id="mod">%</button>
            <button onClick={(e) => { handleClick(e); }} className="button elite" type="button" name="÷" id="quotient">/</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="7" id="seven">7</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="8" id="eight">8</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="9" id="nine">9</button>
            <button onClick={(e) => { handleClick(e); }} className="button elite" type="button" name="x" id="product">*</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="4" id="four">4</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="5" id="five">5</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="6" id="six">6</button>
            <button onClick={(e) => { handleClick(e); }} className="button elite" type="button" name="-" id="diff">-</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="1" id="one">1</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="2" id="two">2</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="3" id="three">3</button>
            <button onClick={(e) => { handleClick(e); }} className="button elite" type="button" name="+" id="sum">+</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="0" id="round">0</button>
            <button onClick={(e) => { handleClick(e); }} className="button" type="button" name="." id="dot">.</button>
            <button onClick={(e) => { handleClick(e); }} className="button elite" type="button" name="=" id="equals">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

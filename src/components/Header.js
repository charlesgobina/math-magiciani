import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <>
    <nav className="naviBar">
      <h1 className="naviTitle">Math Magician</h1>
      <ul className="naviLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="calculator">Calculator</Link>
        </li>
        <li>
          <Link to="quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </>

);

export default Header;

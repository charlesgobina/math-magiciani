import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BiMenu, BiX } from 'react-icons/bi';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="naviBar">
        <h1 className="naviTitle">Math Magician</h1>
        <button onClick={handleToggle} type="button">
          { navOpen ? (
            <BiX style={{
              fontSize: '30px',
              marginTop: '10px',
              color: '#f71501',
            }}
            />
          ) : (
            <BiMenu style={{
              fontSize: '30px',
              marginTop: '10px',
            }}
            />
          ) }
        </button>
        <ul className="newLinks">
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
        <ul className={`naviLinks menuNav ${navOpen ? ' showMenu' : ''}`}>
          <li>
            <Link to="/" onClick={closeNav}>Home</Link>
          </li>
          <li>
            <Link to="calculator" onClick={closeNav}>Calculator</Link>
          </li>
          <li>
            <Link to="quote" onClick={closeNav}>Quote</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

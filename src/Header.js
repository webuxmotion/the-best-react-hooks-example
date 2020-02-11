import React from 'react';
import {
  Link
} from "react-router-dom";

import "./Header.css";

function Header() {

  return (
    <header className="header">
      <div className="header__body">
        <div className="header__cell">
          <a href="/" className="header__logo">PG-MONEY</a>
        </div>
        <div className="header__cell">
          <nav>
            <ul>
              <li><Link to="/deposit">Deposit</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header__cell">
          
        </div>
      </div>
    </header>
  )
}

export { Header };
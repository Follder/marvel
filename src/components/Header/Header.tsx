import React from "react";
import './Header.scss';


export const Header = () => (
  <header className="header">
    <h1 className="header__title"><span>Marvel </span>information portal</h1>
    <nav className="nav">
      <a href="#" className="nav__link nav__link_active">Characters</a>
      <span> / </span>
      <a href="#" className="nav__link">Comics</a>
    </nav>
  </header>
)
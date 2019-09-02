import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="h-logo">
        <a href="/">Logo</a>
      </div>
      <div className="h-search-bar">
        <SearchBar />
      </div>
      <div className="h-links">
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/icons/24x24/marker-white.png`} alt="Местонахождение"/>
        </a>
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/icons/24x24/shopping_basket_white.png`} alt="Корзина"/>
        </a>
      </div>
    </div>
  );
}

export default Header;
import React from 'react';
import './SideNavBar.scss';

function SideNavBar() {
  return (
    <div className="side-nav-bar">
      <a href="/">
        <img src={`${process.env.PUBLIC_URL}/icons/24x24/outline-shopping-cart-white.png`} alt="outline-shopping-cart"/>
        <div>
          Products
        </div>
      </a>
      <a href="/">
        <img src={`${process.env.PUBLIC_URL}/icons/24x24/outline-list-white.png`} alt="outline-list"/>
        <div>
          Categories
        </div>
      </a>
      <a href="/">
        <img src={`${process.env.PUBLIC_URL}/icons/24x24/outline-assessment-white.png`} alt="outline-assessment"/>
        <div>
          Charts
        </div>
      </a>
    </div>
  );
}

export default SideNavBar;
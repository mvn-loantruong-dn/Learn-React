import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="container flex-space-between">
          <div className="logo">
            <a href="#"><img src="./logo192.png" alt="Logo" /></a>
          </div>
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <ul className="menu-right">
            <li><a href="#" className="menu-item"><i className="fa fa-search"></i></a></li>
            <li><a href="#" className="menu-cart"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;

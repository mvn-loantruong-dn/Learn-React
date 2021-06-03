import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class="page-header">
        <div class="container flex-space-between">
          <div class="logo">
            <a href="#"><img src="./logo192.png" alt="Logo" /></a>
          </div>
          <nav class="navbar">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <ul class="menu-right">
            <li><a href="#" class="menu-item"><i class="fa fa-search"></i></a></li>
            <li><a href="#" class="menu-cart"><i class="fa fa-search"></i></a></li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header;

import React from 'react';
import { FaUser, FaRegHeart } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from './../../assets/images/logo.png';


const Header = () => {
  const checkLogin = useSelector((state) => state.isLogined.value);
  const favs = useSelector(state => state.fav.value);
  return (
    <header className="page-header">
      <div className="container flex-space-between">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" activeClassName="active">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news" className="nav-link" activeClassName="active">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events" className="nav-link" activeClassName="active">Events</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="menu-right">
          <li>
            <Link to="/account" className="menu-item"><FaUser /></Link>
          </li>
          <li className="wishlist">
            <Link to="/" className="menu-item">
              <FaRegHeart />
              <span className="wishlist-counter">
                {!favs.length ? '0' : favs.length}
              </span>
            </Link>
          </li>
          {checkLogin &&
            <li>
              <Link to="/account" className="menu-item">Hello user</Link>
            </li>
          }
        </ul>
      </div>
    </header>
  )
}
export default Header;

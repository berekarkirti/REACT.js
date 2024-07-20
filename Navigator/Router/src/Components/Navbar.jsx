import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : '#FFFFF3',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none'
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: '18px', backgroundColor: 'teal', height: '80px', alignItems: 'center' }}>
      <NavLink style={linkStyle} to="/">Home</NavLink>
      <NavLink style={linkStyle} to="/about">About</NavLink>
      <NavLink style={linkStyle} to="/contact">Contact</NavLink>
      <NavLink style={linkStyle} to="/product">Product</NavLink>
      <NavLink style={linkStyle} to="/login">
        <FontAwesomeIcon icon={faUser} /> Login
      </NavLink>
      <NavLink style={linkStyle} to="/addcart">
        <FontAwesomeIcon icon={faPlus} /> Add
      </NavLink>
    </div>
  );
}

export default Navbar;

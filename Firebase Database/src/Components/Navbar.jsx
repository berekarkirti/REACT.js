import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : '#FFFFF3', 
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none'
  });

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-evenly', 
      fontSize: '20px', 
      backgroundColor: '#345866', 
      height: '100px', 
      alignItems: 'center' 
    }}>
       <NavLink style={linkStyle} to="/">Home</NavLink>
       <NavLink style={linkStyle} to="/about">About</NavLink>
      <NavLink style={linkStyle} to="/dashboard">Dashboard</NavLink>
      <NavLink style={linkStyle} to="/login">
        <FaUser style={{ marginRight: '5px' }} /> Login 
      </NavLink>
    </div>
  );
}

export default Navbar;

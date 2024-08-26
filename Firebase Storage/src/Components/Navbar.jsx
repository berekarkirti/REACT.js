import React from 'react';
import { NavLink } from 'react-router-dom';

const linkdata = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Product", path: "/product" },
  { text: "Account", path: "/login" },
  { text: "Add Product", path: "/addproduct" },
];

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: '20px', backgroundColor: 'teal', height: '80px', alignItems: 'center' }}>
      {linkdata.map((el) => (
        <NavLink
          key={el.text}
          to={el.path}
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#FFFFF3',
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
          })}
        >
          {el.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;

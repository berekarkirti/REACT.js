import React, { useContext } from 'react';
import { ThemeContext } from '../context/Themecontext';


const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1 style={{ fontSize: '30px' }}>Theme-App</h1>
      <h2 style={{ fontSize: '24px' }}>The Theme is {theme == 'light' ? 'Light' : 'Dark'}</h2>
    </div>
  );
};

export default Navbar;

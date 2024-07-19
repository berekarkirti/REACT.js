import React, { useContext } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { ThemeContext } from '../context/Themecontext';


const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{margin: '5%',fontSize: '32px',padding: '10px 20px',borderRadius: '50px',backgroundColor: theme == 'light' ? 'white' : 'black',color: theme == 'light' ? 'black' : 'white',}}>
      {theme == 'light' ? <BiSun /> : <BiMoon />}
    </button>
  );
};

export default Button;

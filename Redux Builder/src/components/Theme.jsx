import React from 'react';
import "../styles/style.css";
import { useDispatch, useSelector } from 'react-redux';
import { setLightTheme, setDarkTheme } from '../Redux/action';

const Theme = () => {
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();
  return (
    <div className="theme-main">
      <button onClick={() => dispatch(setLightTheme())}disabled={theme === 'light'}>Switch to Light</button>
      <button onClick={() => dispatch(setDarkTheme())} disabled={theme === 'dark'}>Switch to Dark</button>
    </div>
  )
}

export default Theme

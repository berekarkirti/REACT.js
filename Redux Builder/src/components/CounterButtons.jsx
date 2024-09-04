import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/style.css";
import { handleAdd, handleReduce } from '../Redux/action';
import CounterValue from './CounterValue';

const CounterButtons = () => {
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`counter-main ${theme === 'light' ? 'light_theme' : 'dark_theme'}`}>
      <CounterValue />
      <div className="counter-buttons">
        <button onClick={() => dispatch(handleAdd())}>ADD</button>
        <button onClick={() => dispatch(handleReduce())}>REDUCE</button>
      </div>
    </div>
  );
};

export default CounterButtons;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/style.css"
import { INCREMENTCounter, DECREMENTCounter } from '../Redux/action';
import CounterValue from './CounterValue';

const CounterButtons = () => {
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`counter-main ${theme}`}>
      <CounterValue />
      <div className="counter-buttons">
        <button onClick={() => dispatch(INCREMENTCounter())}>ADD</button>
        <button onClick={() => dispatch(DECREMENTCounter())}>REDUCE</button>
      </div>
    </div>
  );
};

export default CounterButtons;

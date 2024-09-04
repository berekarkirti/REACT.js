import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/style.css"
import { INCREMENTCounter, DECREMENTCounter } from '../Redux/action'; 

const CounterButtons = () => {
  const counter = useSelector((store) => store.counter.counter);
  const theme = useSelector((store) => store.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`counter-main ${theme}`}>
      <h1>Counter <br /><br /> {counter}</h1>
      <div className="counter-buttons">
        <button onClick={() => dispatch(INCREMENTCounter())}>ADD</button>
        <button onClick={() => dispatch(DECREMENTCounter())}>REDUCE</button>
      </div>
    </div>
  );
};

export default CounterButtons;

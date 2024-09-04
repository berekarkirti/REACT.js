import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const counter = useSelector((store) => store.counter.counter);

  return (
    <div>
      <h1>Counter : {counter}</h1>
    </div>
  );
};

export default CounterValue;
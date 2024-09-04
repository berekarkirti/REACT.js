import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const counter = useSelector((store) => store.counter.counter);

  return (
    <div>
      <hr></hr>
    </div>
  );
};

export default CounterValue;

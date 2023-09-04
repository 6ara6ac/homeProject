import { useState } from 'react';
import classes from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.btn}>
      <button onClick={increment}>increment: {count}</button>
    </div>
  );
};

import { useState } from 'react';

export default function Counter() {
  const [counter, setCount] = useState(0);

  function increase() {
    setCount(counter + 1);
  }

  function decrease() {
    setCount(counter - 1);
  }

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

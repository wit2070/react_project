import { useState } from 'react';
import BtnSample from '../components/BtnSample';

export default function Index() {
  const [counter, setCount] = useState(0);
  function increase() {
    setCount(counter + 1);
  }
  return (
    <>
      <BtnSample
        styles={{
          position: 'relative',
          left: 500,
          top: 500,
          width: 120,
          height: 90,
          background: 'blue',
        }}
        onClick={increase}
        text={counter}
      />
    </>
  );
}

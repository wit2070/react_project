// git 수정
import { useState } from 'react';
import BtnSample from './BtnSample';

function App() {
  const [count, setConut] = useState(0);

  function increase() {
    setConut(count + 1);
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
          background: 'yellow',
        }}>
        ddd
      </BtnSample>
    </>
  );
}

export default App;

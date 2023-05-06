import React from 'react';

function Hello(props) {
  const { name, age } = props;

  return (
    <>
      <div>안녕하세요</div>
      <h1>Hello, {name}</h1>
      {age ? <h1>My age is {age}</h1> : <></>}
    </>
  );
}

export default Hello;

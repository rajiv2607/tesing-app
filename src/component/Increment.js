import React, { useState } from 'react';

function App() {
  let [count, setCount] =  useState(0)


  const handleIncrement = () => {
    setCount(count + 1);
  };


  function  handleDecrement(){
    setCount(count - 1);
  }

  return (
    <div className="App">
     <h1>Testing </h1>
     <button className='decrement' onClick={handleDecrement}>-</button>
     <label className='count'>{count}</label>
     <button className='increment' onClick={handleIncrement} >+</button>
    </div>
  );
}

export default App;

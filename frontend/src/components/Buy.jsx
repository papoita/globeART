import {useState} from 'react';

// let count = 0;

  const Buy = () => {
    // const arr = useState(0);
    // const count = arr[0];
    // const setCount = arr[1];

    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
    <h2>Start your collection</h2>
    
    <button onClick={ increment }>Buy now</button>
    <h3>The NFT buying intention is { count }</h3>
    </>
  );
};

export default Buy;


import React from 'react';
import {useState} from 'react';
import { Button } from "react-bootstrap";

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
    
    
    < Button gb="primary" onClick={ increment }> Start your collection <br/> Buy now</Button>
    {/* <div> console.log(The NFT buying intention is { count })</div> */}
    </>
  );
};

export default Buy;


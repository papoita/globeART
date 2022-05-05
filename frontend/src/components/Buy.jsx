import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

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
    <Card style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} className="w-100, h-100 " >
      <Card.Body className="d-flex flex-wrap align-items-center align-content-center justify-content-center" >
        <Card.Text  className="d-grip  p-5 fs-3 fw-bold " > Start your Collection</Card.Text>
          <Button gb="primary" onClick={increment} size="lg" className="d-grip  m-5 fs-3 ">
            Buy now
          </Button>
        
      </Card.Body>
    </Card>
  );
};

export default Buy;

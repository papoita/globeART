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
    <Card style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}  className="d-flex flex-wrap text-center">
      <Card.Body  >
        <Card.Text  className="d-grip  p-1 fs-3 fw-bold align-content-center" > Start your Collection</Card.Text>
        <Card.Text  className="d-grip  p-1 fs-5  align-content-center" > The 2022 Collection is very special as the first one that globeART has created, expect amazing graphics and contrasting colors to match that adrenaline rush of traveling the world again! </Card.Text>
          <Button gb="primary" onClick={increment} size="lg" className="d-grip m-2 p-3  fs-4 align-middle text-center">
            Buy now
          </Button>
        
      </Card.Body>
    </Card>
  );
};

export default Buy;


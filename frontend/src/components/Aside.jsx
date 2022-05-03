import React from "react";
import { Card, Button } from "react-bootstrap";

const Aside = () => {
  return (
    <Card border="primary" style={{ height: 700 }}>
      <Card.Img variant="top" src="./name.png" />
      <Card.Body variant="dark">
        <Card.Title>NFT art collection for wanderlusts</Card.Title>
        <Card.Text>
          <p>
            Do you love travelling and art, but tired of collecting fridge
            magnets?
          </p>
          <p>
            This beautiful NFT artwork only obtainable when you visit the city,
            will remind you of the places that you have been and the memories
            that you have.
          </p>
          <p> The more you travel, the more you can collect.</p>
        </Card.Text>
        <Button gb="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Aside;

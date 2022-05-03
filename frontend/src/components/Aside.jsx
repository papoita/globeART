import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <Card border="primary" style={{ height: 780 }}>
      <Card.Img variant="top" src="./samplenft.png" />
      <Card.Body variant="dark">
        <Card.Title>
          {" "}
          <h1>globeART</h1>
        </Card.Title>
        <Card.Text>
          <br />
          <br />
          <h2>NFT art collection for wanderlusts</h2>
          <br />
          Do you love travelling and art, but tired of collecting fridge
          magnets?
          <br />
          <br />
          This beautiful NFT artwork only obtainable when you visit the city,
          will remind you of the places that you have been and the memories that
          you have.
          <br />
          <br />
          The more you travel, the more you can collect.
        </Card.Text>
        <Button gb="primary" as={Link} to="/nftcollection">
          Start your Collection
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Aside;

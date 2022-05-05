import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <Card className="rounded-0" border="primary" style={{ height: 780 }}>
      <Card.Img className="rounded-0" variant="top" src="./samplenft.png" />
      <Card.Body variant="dark">
        <Card.Img  src="./logonamesm.png"></Card.Img>
        <Card.Title className="fs-1 fw-bold">NFT art collection for wanderlusts</Card.Title>
        <Card.Text className="p-2">
          Do you love travelling and art, but tired of collecting fridge
          magnets?
        </Card.Text>
        <Card.Text className="p-2">
          This beautiful NFT artwork only obtainable when you visit the city,
          will remind you of the places that you have been and the memories that
          you have.
        </Card.Text>
        <Card.Text className="p-2">The more you travel, the more you can collect.</Card.Text>

        <Button className="m-1 p-2  fs-5 fw-bold vh-100" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} as={Link} to="/nftglobegallery">
          Start your Collection
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Aside;

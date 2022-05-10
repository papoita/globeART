import React from "react";
import { Card, Button } from "react-bootstrap";

const Aside = ({ account, connect, disconnect, isActive }) => {
  return (
    <Card className="rounded-0 " border="primary" style={{ height: 926 }}>
      <Card.Img className="rounded-0" variant="top" src="./samplenft.png" />
      <Card.Body variant="dark">
        <Card.Img src="./logonamesm.png"></Card.Img>
        <Card.Title className="fs-4 fw-bold">
          NFT art collection for wanderlusts
        </Card.Title>
        <Card.Text className="p-1">
          Do you love travelling and art, but tired of collecting fridge
          magnets?
        </Card.Text>
        <Card.Text className="p-1">
          This beautiful NFT artwork only obtainable when you visit the city,
          will remind you of the places that you have been and the memories that
          you have.
        </Card.Text>
        <Card.Text className="p-1">
          The more you travel, the more you can collect.
        </Card.Text>
        <Button
          gb="primary"
          size="md"
          className="d-grip m-2 p-3  fs-4 align-middle text-center"
          onClick={isActive ? disconnect : connect}>
          {isActive ? "Disconnect MetaMask" : "Connect to MetaMask"}
        </Button>
        <div className="mt-2 mb-2">
          Connected Account: {isActive ? account : ""}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Aside;

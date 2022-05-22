import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import { IconContext } from "react-icons";

const Aside = ({ account, connect, disconnect, isActive }) => {
  return (
    <Card className="rounded-0 vh-100" border="primary">
      <Card.Img className="rounded-0" variant="top" src="./samplenft.png" />
      <Card.Body variant="dark">
        <Card.Img src="./logonamesm.png"></Card.Img>
        <Card.Title className="fs-4 fw-bold">
          NFT art collection for wanderlusts
        </Card.Title>
        <Card.Text className="p-1">
          Do you love travelling and art, but are tired of collecting fridge
          magnets?
        </Card.Text>
        <Card.Text className="p-1">
          This beautiful NFT artwork is only obtainable when you visit the city.
          It will remind you of the places that you have been and the memories
          that you have.
        </Card.Text>
        <Card.Text className="p-1">
          The more you travel, the more you can collect.
        </Card.Text>
        <Card.Text className="p-1 fw-bold">
          Buy the 2022 collection by connecting to your{" "}
          <IconContext.Provider value={{ color: "#31326f", size: 20 }}>
            <FaWallet />
          </IconContext.Provider>
        </Card.Text>
        <Row className="m-2 justify-content-center">
          <Button
            variant="light"
            className="mt-2 d-grid gap-2 mb-2 align-middle"
            style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}
            onClick={isActive ? disconnect : connect}>
            {isActive ? "Disconnect MetaMask" : "Connect to MetaMask"}
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Aside;

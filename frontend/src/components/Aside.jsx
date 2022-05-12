import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";

const Aside = ({ account, connect, disconnect, isActive }) => {
  return (
    <Card className="rounded-0 " border="primary" style={{ height: 800 }}>
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
          This beautiful NFT artwork is only obtainable when you visit the city. It 
          will remind you of the places that you have been and the memories that
          you have.
        </Card.Text>
        <Card.Text className="p-1">
          The more you travel, the more you can collect.
        </Card.Text>
        <Card.Text className="p-1 fw-bold">
          Browse the 2022 collection by connecting to your wallet 
        </Card.Text>
        <FaWallet  style={{color:"blue", size:4}}/>
        <Button
          gb="primary"
          
          className="d-grip m-2 p-1  fs-5 align-middle text-center"
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

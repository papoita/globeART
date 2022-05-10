import React from "react";
import { Button, Card } from "react-bootstrap";
import useWeb3 from "../hooks/useWeb3";

const Buy = () => {
  const { buyStoreItem } = useWeb3();

  return (
    <Card
      style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}
      className="d-flex flex-wrap text-center">
      <Card.Body>
        <Card.Text className="d-grip  p-1 fs-3 fw-bold align-content-center">
          {" "}
          Start your Collection
        </Card.Text>
        <Card.Text className="d-grip  p-1 fs-5  align-content-center">
          {" "}
          The 2022 Collection is very special as the first one that globeART has
          created, expect amazing graphics and contrasting colors to match that
          adrenaline rush of traveling the world again!{" "}
        </Card.Text>
        <Button
          gb="primary"
          onClick={buyStoreItem}
          size="md"
          className="d-grip m-2 p-3  fs-4 align-middle text-center">
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Buy;

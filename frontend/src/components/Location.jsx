import React from "react";
import { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useGeolocation } from "../hooks/useGeolocation";

function Location() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert bg="warning" variant="warning" show={show}>
        <Alert.Heading>Allow Location</Alert.Heading>
        <p>
          In order to collect NFTs you have to physically be in the location.
          Share your location to start collecting!
        </p>
        <useGeolocation />
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-warning">
            Allow
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Share Location</Button>}
    </>
  );
}

export default Location;

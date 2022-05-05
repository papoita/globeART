import React from "react";
import { Button, Alert } from "react-bootstrap";
import useGeolocation from "../hooks/useGeolocation";

function Location() {
  const { allow, setAllow } = useGeolocation();

  return (
    <>
      <Alert bg="warning" variant="warning" show={!allow}>
        <Alert.Heading>Allow Location</Alert.Heading>
        <p>
          In order to collect NFTs you have to physically be in the location.
          Share your location to start collecting!
        </p>

        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setAllow(true)} variant="outline-warning">
            Allow
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Location;
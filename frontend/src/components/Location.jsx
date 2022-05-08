import React from "react";
import { Button, Alert } from "react-bootstrap";
import useGeolocation from "../hooks/useGeolocation";

function Location() {
  const { allow, setAllow } = useGeolocation();

  return (
    <>
      <Alert className="m-0" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} show={!allow}>
        <Alert.Heading>Allow Location</Alert.Heading>
        <p>
          In order to collect NFTs you have to physically be in the location.
          Share your location to start collecting!
        </p>

        <hr />
        <div className="d-flex justify-content-end">
          <Button className= "fw-bold" onClick={() => setAllow(true)} variant="primary">
            Allow
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Location;

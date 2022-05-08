import React from "react";
import { Button, Alert } from "react-bootstrap";
import useGeolocation from "../hooks/useGeolocation";

function Location({ alert, setAlert }) {
  const { allow, setAllow } = useGeolocation();

  const clickHandler = () => {
    setAllow(true);
    setAlert(false);
  }

  return (
    <>
      <Alert className="m-0" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} show={!alert && !allow}>
        <Alert.Heading>Allow Location</Alert.Heading>
        <p>
          Share your location to start collecting! 
        </p>
        <div className="d-flex justify-content-end">
          <Button className= "fw-bold" onClick={() => clickHandler()} variant="primary">
            Allow
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Location;

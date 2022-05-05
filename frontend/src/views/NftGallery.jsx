import React from "react";

import { Carousel, Button } from "react-bootstrap";
import Navigation from "../components/Navigation";


function NftGallery() {
  return (
    <>
      <Navigation />
      <Carousel  className="m-3 p-4">
        <Carousel.Item  >
        <img className="d-block w-100" src="images/athens.png" alt="Third slide" />

          <Carousel.Caption>
            <h3> Athens 2022</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item >
          <img className="d-block w-100" src="images/berlin.png" alt="Second slide" />

          <Carousel.Caption>
            <h3> Berlin 2022</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100" src="images/cairo.png" alt="Third slide" />

          <Carousel.Caption>
            <h3>Cairo 2022</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item >
          <img className="d-block w-100" src="images/lisbon.png" alt="Third slide" />

          <Carousel.Caption>
            <h3> Lisbon 2022</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default NftGallery;

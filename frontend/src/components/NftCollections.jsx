import React from "react";

import { Carousel } from "react-bootstrap";
import Navigation from "./Navigation";
import Buy from "./Buy"



function Nft_collections() {
  return (
    <>
    <Navigation />
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="athens.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Athens 2022</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Buy/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="berlin.png"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3> Berlin 2022</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Buy/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="cairo.png"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Cairo 2022</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        <Buy/>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="lisbon.png"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3> Lisbon 2022</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        <Buy/>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  );
}

export default Nft_collections;
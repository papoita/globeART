import React from "react";

import {
  Carousel,
  Button,
  Card,
  CardGroup,
  Container,
  Row,
} from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function Gallery({
  web3Handler,
  items,
  buyStoreItem,
  account,
  loading,
}) {

  console.log("ITEMS", items);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      <Container>
        <Carousel className="m-3 p-4">
          {items.length > 0 &&
            items.map((item, idx) => (
              <Carousel.Item key={idx}>
                <img
                style={{height:700}}
                  className="rounded mx-auto d-block"
                  src={item.image}
                  alt={item.name}
                />
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                  <Button
                    className="fw-bold"
                    style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}
                    href={`/details/${item.name}`}
                    alt="Buy item">
                    Buy Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </Container>

     
      <Footer />
    </>
  );
}

export default Gallery;

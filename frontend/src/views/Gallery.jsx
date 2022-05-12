import React from "react";
import { useState } from "react";
import {
  Carousel,
  Button,
  Collapse,
  Card,
  Col,
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

  const [open, setOpen] = useState(false);

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
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-text"
        aria-expanded={open}
        className="fw-bold m-3 d-grid gap-2 col-6 mx-auto"
        style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} size="lg">
      
        View All
      </Button>
      <Collapse in={open}>
        <div id="collapse-text">
  
        <CardGroup className="m-4">
        <Container>
          <Row>
          
            <Row xs={2} md={4} className="g-4">
            {items.length > 0 ? (
              items.map((item, idx) => (
                <Card key={idx} className="m-4">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    
                  />
                  <Card.Body
                    style={{
                      background: "linear-gradient(#B2FBED, #9198e5)",
                      
                    }}>
                    <Card.Title>{item.collection}</Card.Title>
                    <Card.Text>
                      <small bg="primary">Price: {item.price} ETH</small>
                    </Card.Text>
                    <Button onClick={() => buyStoreItem(item)}>Buy Now!</Button>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <div style={{ padding: "1rem 0" }}>
                <h2>No listed assets</h2>
              </div>
            )}
          </Row>
          </Row>
        </Container>
      </CardGroup>
        </div>
      </Collapse>
     
      <Footer />
    </>
  );
}

export default Gallery;

import React, { useEffect } from "react";

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
import { SizeMe } from "react-sizeme";

import useWeb3 from "../hooks/useWeb3";
function Gallery({
  account,
  web3Handler,
  loadStoreItems,
  items,
  buyStoreItem,
  loading
}) {

  useEffect(() => {
    loadStoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      <Container>
        <Carousel className="m-3 p-4">
          {items.length > 0 && (
                  items.map((item, idx) => ( 
              <Carousel.Item key={idx} >
              <img className="d-block w-100" src={item.image} alt={item.name} />
                <Carousel.Caption>
                  <h3>{item.name}</h3>
                  <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} href={`nft/${Number(item.itemId)}`} alt="Buy item">
                    + Details
                  </Button>
                </Carousel.Caption>
              </Carousel.Item >
            )))}
          </Carousel>
        </Container>
      
      <CardGroup className="m-4">
        <Container>
          <Row>
            <h2>GlobeART Collections</h2>
            {items.length > 0 ? (
              items.map((item, idx) => (
                <Card key={idx} className="m-4">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ width: "400px" }}
                  />
                  <Card.Body
                    style={{
                      background: "linear-gradient(#B2FBED, #9198e5)",
                      width: "400px",
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
        </Container>
      </CardGroup>
      <Footer />
    </>
  );
}

export default Gallery;

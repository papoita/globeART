import { Container, Row, Col, Card } from "react-bootstrap";

import Navigation from "../components/Navigation";
import Buy from "../components/Buy";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";

export default function AvailableNFT({
  location,
  items,
  account,
  web3Handler,
  buyStoreItem,
  purchases,
  success,
}) {
  
  const [availableNFT, setAvailableNFT]= useState(null)
  
  useEffect(()=>{
    for (const item of items) {
      if (item.name === location.city && item.country === location.country) {
        setAvailableNFT(item);
      }
    }
  }, [items, location.city, location.country])

  

  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      <Container md="auto">
        {location.allowLocation ? (
          <Row>
            <Col lg={9}>
              {availableNFT ? (
                <Card className="m-4 text-center">
                  <Card.Img
                    style={{ height: 580 }}
                    variant="top"
                    src={`../images/${availableNFT.name
                      .split(" ")
                      .join("")}.png`}
                  />
                  <Card.Body
                    style={{
                      background: "linear-gradient(#B2FBED, #9198e5)",
                    }}>
                    <Card.Title>{availableNFT.collection}</Card.Title>
                    <Card.Text>
                      <small bg="primary">
                        Price: {availableNFT.price} ETH
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                <div style={{ padding: "1rem 0" }}>
                  <h2>No NFT available at your location</h2>
                </div>
              )}
            </Col>
            <Col lg={3} className="fw-bold m-4 d-grid gap-2 col-3 mx-auto ">
              <Buy
                buyStoreItem={buyStoreItem}
                item={availableNFT}
                purchases={purchases}
                success={success}
              />
            </Col>
          </Row>
        ) : (
          <Row style={{ padding: 40, fontWeight: "bold", fontSize: 25 }}>
            Please enable location to access this page
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
}

//align-middle align-items-center align-content-center justify-content-center

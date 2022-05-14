import { Container, Row, Col, Card } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Buy from "../components/Buy";
import Footer from "../components/Footer";

export default function AvailableNFT({
  location,
  items,
  account,
  web3Handler,
  buyStoreItem,
  purchases,
}) {
  let availableNft;

  for (const item of items) {
    if (item.name === location.city && item.country === location.country) {
      availableNft = item;
    }
  }

  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      <Container md="auto">
        <Row>
          <Col lg={9}>
            {availableNft ? (
              <Card className="m-4 text-center">
                <Card.Img
                  style={{ height: 580 }}
                  variant="top"
                  src={availableNft.image}
                />
                <Card.Body
                  style={{
                    background: "linear-gradient(#B2FBED, #9198e5)",
                  }}>
                  <Card.Title>{availableNft.collection}</Card.Title>
                  <Card.Text>
                    <small bg="primary">Price: {availableNft.price} ETH</small>
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
              item={availableNft}
              purchases={purchases}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

//align-middle align-items-center align-content-center justify-content-center

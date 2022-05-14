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
}) {
  let nft;

  for (const item of items) {
    if (item.name === location.city && item.country === location.country) {
      nft = item;
    }
  }

  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      <Container md="auto">
        <Row>
          <Col lg={9}>
            {nft ? (
              <Card className="m-4 text-center">
                <Card.Img
                  style={{ height: 580 }}
                  variant="top"
                  src={nft.image}
                />
                <Card.Body
                  style={{
                    background: "linear-gradient(#B2FBED, #9198e5)",
                  }}>
                  <Card.Title>{nft.collection}</Card.Title>
                  <Card.Text>
                    <small bg="primary">Price: {nft.price} ETH</small>
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
            <Buy buyStoreItem={buyStoreItem} item={nft} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

//align-middle align-items-center align-content-center justify-content-center

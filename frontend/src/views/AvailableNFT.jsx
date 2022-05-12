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
  console.log(location);
  console.log(items);
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
        <Row className="justify-content-center">
          <Col lg={9}>
            {nft ? (
              <Card className="m-4">
                <Card.Img
                  variant="top"
                  src={nft.image}
                  style={{ width: "600px" }}
                />
                <Card.Body
                  style={{
                    background: "linear-gradient(#B2FBED, #9198e5)",
                    width: "600px",
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
          <Col lg={3} className="align-items-center h-100 align-middle ">
            <Buy buyStoreItem={buyStoreItem} item={nft} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

//align-middle align-items-center align-content-center justify-content-center

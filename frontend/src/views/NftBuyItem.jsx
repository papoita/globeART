import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import NftItem from "../components/NftItem";
import Buy from "../components/Buy";
import Footer from "../components/Footer";

function NftBuyItem() {
  return (
    <>
      <Navigation />
      <Container display="flex"  >
        <Row >
          <Col sm={7}>
            <NftItem />
          </Col>
          <Col sm={4} >
            <Buy />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default NftBuyItem;

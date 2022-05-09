import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import NftItem from "../components/NftItem";
import Buy from "../components/Buy";
import Footer from "../components/Footer";
import Location from "../components/Location";

function NftBuyItem({ alert, setAlert, store, buyStoreItem, items, loadStoreItems }) {
  
  const { id } = useParams();
  
  useEffect(() => {
    loadStoreItems();
  }, [])

  return (
    <>
      <Navigation />
      { alert && <Location setAlert={ setAlert } /> }
      <Container  md="auto" >
        <Row className="justify-content-center">
          <Col lg={9}>
            <NftItem />
          </Col>
          <Col lg={3}  className="align-items-center h-100 align-middle " >
            <Buy />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default NftBuyItem;
//align-middle align-items-center align-content-center justify-content-center
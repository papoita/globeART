import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import NftItem from "../components/NftItem";
import Buy from "../components/Buy";
import Footer from "../components/Footer";
import Location from "../components/Location";


function NFT({ account, web3Handler, buyStoreItem, item, loadStoreItem, loading }) {
  
  const { id } = useParams();

  useEffect(() => {
    loadStoreItem(id)
  }, [])

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      <Container  md="auto" >
        <Row className="justify-content-center">
          <Col lg={9}>
            {/* <NftItem item={item}/> */}
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

export default NFT;
//align-middle align-items-center align-content-center justify-content-center
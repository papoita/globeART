import "../App.css";
import {useState} from 'react';
import { Row, Col } from "react-bootstrap";
import { SizeMe } from "react-sizeme";
import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import SimpleGlobe from "../components/globe";
import NftModal from "../components/NftModal";

function Homepage({ account, web3Handler, location }) {
  const [show, setShow] = useState(false);
  const [nft, setNft] = useState({})
    
  const handleClose = () => setShow(false);
  const handleShow = (d) => {
    setShow(true);
    setNft(d)
  }

  console.log(location);
  return (
    <div className="Homepage">
      <Navigation account={account} web3Handler={web3Handler} />
      <NftModal nft={nft} show={show} onHide={() => handleClose()}/>
      <Row>
        <Col sm={9} style={{ paddingRight: "0px" }}>
          <SizeMe>
            {({ size: { width } }) => (
              <SimpleGlobe width={width} height={width / (4 / 3)} handleShow={handleShow} />
            )}
          </SizeMe>
        </Col>

        <Col sm={3} style={{ paddingLeft: "0px" }}>
          <Aside />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Homepage;

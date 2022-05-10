import "../App.css";
import { Row, Col } from "react-bootstrap";
import { SizeMe } from "react-sizeme";
import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import SimpleGlobe from "../components/globe";

function Homepage({
  account,
  web3Handler,
  location,
  connect,
  disconnect,
  isActive,
  isDisable,
}) {
  console.log(location);
  return (
    <div className="Homepage">
      <Navigation account={account} web3Handler={web3Handler} />
      <Row>
        <Col sm={9} style={{ paddingRight: "0px" }}>
          <SizeMe>
            {({ size: { width } }) => (
              <SimpleGlobe width={width} height={width / (4 / 3)} />
            )}
          </SizeMe>
        </Col>

        <Col sm={3} style={{ paddingLeft: "0px" }}>
          <Aside
            account={account}
            connect={connect}
            disconnect={disconnect}
            isActive={isActive}
          />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Homepage;

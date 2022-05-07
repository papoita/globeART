// this unifies several components,
import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
//import ReactGlobe from 'react-globe.gl';
import { SizeMe } from "react-sizeme";

//import SceneView from "../components/SceneView";
import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Location from "../components/Location";
import SimpleGlobe from "../components/globe";

function Homepage({ account, web3Handler }) {
  return (
    <div className="Homepage">
<<<<<<< HEAD
      <Navigation account={ account } web3Handler={ web3Handler } />
      <Location/>
=======
      <Navigation />
      <Location />
>>>>>>> fa696cdb0ea52e6929ec66b0bc87bc7656f90d6d
      <Row>
        <Col sm={9} style={{ paddingRight: "0px" }}>
          <SizeMe>
            {({ size: { width } }) => (
              <SimpleGlobe width={width} height={width / (4 / 3)} />
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

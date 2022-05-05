// this unifies several components,
import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";

import SceneView from "../components/SceneView";
import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Location from "../components/Location";


function Homepage({ account, web3Handler }) {
  return (
    
    
    <div className="Homepage">
      <Navigation account={ account } web3Handler={ web3Handler } />
      <Location/>
      <Row>
        <Col sm={9} style={{ paddingRight: "0px" }}>
          <SceneView />
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

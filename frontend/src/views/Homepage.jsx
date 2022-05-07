// this unifies several components,
import React from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
//import ReactGlobe from 'react-globe.gl';

//import SceneView from "../components/SceneView";
import Navigation from "../components/Navigation";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Location from "../components/Location";
import SimpleGlobe from "../components/globe";


function Homepage() {
  return (
    
    
    <div className="Homepage">
      <Navigation />
      <Location/>
      <Row>
        <Col  sm={9} style={{ paddingRight: "0px" }}>
          <SimpleGlobe height="10vh" width={10}/>
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

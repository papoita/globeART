import React from "react";
import "../App.css";
import { Card, CardGroup } from "react-bootstrap";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function PersonalCollection() {
  return (
    <>
      <Navigation />
      <CardGroup className="m-4">
        <Card className="m-4">
          <Card.Img variant="top" src="images/cairo.png" />
          <Card.Body
            style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}
          >
            <Card.Title>Cairo 2022</Card.Title>
            <Card.Text>Cairo 2022</Card.Text>
            <Card.Text>
              <small bg="primary">Price bought</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-4">
          <Card.Img variant="top" src="images/rio_de_janeiro.png" />
          <Card.Body
            style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}
          >
            <Card.Title>Rio de Janeiro 2022</Card.Title>
            <Card.Text>hello caipirinha</Card.Text>
            <Card.Text>
              <small bg="primary">Price bought</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-4">
          <Card.Img variant="top" src="images/ottawa.png" />
          <Card.Body
            style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}
          >
            <Card.Title>Ottawa 2022 </Card.Title>
            <Card.Text>Nature and trails are its thing</Card.Text>
            <Card.Text>
              <small bg="primary">Price bought</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Footer />
    </>
  );
}

export default PersonalCollection;

//<Row xs={1} md={2} className="g-4">
// {Array.from({ length: 4 }).map((_, idx) => (
//   <Col>
//     <Card>
//       <Card.Img variant="top" src="images/cairo.png" />
//       <Card.Body>
//         <Card.Title>Cairo 2022</Card.Title>
//         <Card.Text>
//           Cairo 2022
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </Col>
// ))}
// </Row>

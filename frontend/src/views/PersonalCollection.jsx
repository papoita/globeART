import React from "react";
import "../App.css";
import { Card, CardGroup } from "react-bootstrap";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function PersonalCollection( { purchases } ) {

  return (
    <>
      <Navigation />
      <CardGroup className="m-4">
        <h2>GlobeART Collections</h2>
        {purchases.length > 0 ? (
          purchases.map((item, idx) => (
            <Card key={idx} className="m-4">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "200px" }}
              />
              <Card.Body
                style={{
                  background: "linear-gradient(#B2FBED, #9198e5)",
                  width: "200px",
                }}>
                <Card.Title>{item.collection}</Card.Title>
                <Card.Text>
                  <small bg="primary">Bought for: {item.price}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div style={{ padding: "1rem 0" }}>
            <h2>You don't have any collectables yet! </h2>
          </div>
        )}
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

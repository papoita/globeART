import React from "react";
import "../App.css";
import { Card, CardGroup } from "react-bootstrap";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function PersonalCollection({ purchases, items }) {
  const myCollection = [];

  for (let item of items) {
    if (["Vancouver", "Tokyo", "Ottawa", "Toronto"].includes(item.name)) {
      myCollection.push(item);
    }
  }
  console.log(myCollection);

  return (
    <>
      <Navigation />
      <CardGroup className="m-4">
        {myCollection.length > 0 ? (
          myCollection.map((item, idx) => (
            <Card key={idx} className="m-4 text-center">
              <Card.Img variant="top" src={item.image} />
              <Card.Body
                style={{
                  background: "linear-gradient(#B2FBED, #9198e5)",
                }}>
                <Card.Title>
                  {item.name} {item.collections}
                </Card.Title>
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

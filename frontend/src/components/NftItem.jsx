import React from "react";

import { Card } from "react-bootstrap";


function NftItem() {
  return (
    <>
      <Card className="w-100" display="flex"  justify-content="center" align-items="center">
        <Card.Img variant="top" src="images/rio_de_janeiro.png" />
        <Card.Body>
          <Card.Title>Rio de Janeiro 2022</Card.Title>
          <Card.Text>
            Rio is amazing! Enjoy açai and copacabana. Do you remeber going to botafogo and eating pao de queijo?
          </Card.Text>
         
        </Card.Body>
      </Card>
    </>
  );
}

export default NftItem;

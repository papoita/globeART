import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
  return (
    <Card className="text-white text-center" bg="primary" variant="light"  >
      <Card.Header>Contact Us</Card.Header>

      <Card.Footer className="text-white">
        links to github, twitter, linkedin, fb
      </Card.Footer>
    </Card>
  );
}

export default Footer;

import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
  return (
    <Card style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}className="text-center" variant="dark">
      <Card.Header>Contact Us</Card.Header>

      <Card.Footer className="text-muted">
        links to github, twitter, linkedin, fb
      </Card.Footer>
    </Card>
  );
}

export default Footer;

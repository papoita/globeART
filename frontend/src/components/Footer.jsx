import React from "react";
import { Card } from "react-bootstrap";

function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>Contact Us</Card.Header>
      
      <Card.Footer className="text-muted">links to github, twitter, linkedin, fb</Card.Footer>
    </Card>
  );
}

export default Footer;

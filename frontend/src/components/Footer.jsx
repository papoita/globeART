import React from "react";

import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Card
      className="text-white text-center text-muted"
      bg="primary"
      variant="light"
    >
      <Card.Header>Contact Us </Card.Header>

      <Card.Footer
        justify-content="space-around"
        className="text-white text-muted "
      >
        <FaGithub />
        Want to chat about awesome ideas? let's get some coffee
        <FontAwesomeIcon
          icon={faCoffee}
          className="fa-flip --fa-animation-duration:3s "
        />
      </Card.Footer>
    </Card>
  );
}

export default Footer;

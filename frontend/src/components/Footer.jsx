import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Card className="text-white text-center" bg="primary" variant="light">
      <Card.Header>Contact Us</Card.Header>

      <Card.Footer className="text-white">
        <FaGithub />
        <FaTwitter />
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

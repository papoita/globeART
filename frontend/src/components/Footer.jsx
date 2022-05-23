import React from "react";

import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Card
      className="text-white text-center text-muted fixed-bottom"
      bg="primary"
      variant="light"
      style={{ height: "3rem" }}>
      <Card.Footer className="d-flex text-white text-muted justify-content-center  align-items-center">
        <a href={"https://github.com/papoita/globeART"}>
          {" "}
          <FaGithub style={{ margin: "0 20px" }} />
        </a>
        Want to chat about awesome ideas? let's get some coffee
        <FontAwesomeIcon
          style={{ margin: "0 10px" }}
          icon={faCoffee}
          className="fa-flip --fa-animation-duration:2s "
        />
      </Card.Footer>
    </Card>
  );
}

export default Footer;

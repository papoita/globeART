import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown, Image, Button } from "react-bootstrap";

import useWeb3 from "../hooks/useWeb3";

function Navigation() {
  const { account, web3Handler } = useWeb3();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand thumbnail="true" src="./logosm.png" as={Link} to="/">
          {" "}
          <Image bg="primary" style={{ width: "5rem" }} src="./logosm.png" />
          globeART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>

      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Collect NFTs</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>

            <NavDropdown title="Collections" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Personal Collection
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/nftcollection">
                globeArt Collection
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Sign In/Out
              </NavDropdown.Item>
              {/* 
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
        <Nav>
        {account ? (
      <Nav.Link
          href={`https://etherscan.io/address/${account}`}
          target="_blank"
          rel="noopener noreferrer"
          className="button nav-button btn-sm mx-4">
          <Button variant="outline-light">
              {account.slice(0, 5) + '...' + account.slice(38, 42)}
          </Button>

      </Nav.Link>
  ) : (
      <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
  )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

import { Carousel, Button, Card, CardGroup, Container, Row } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { SizeMe } from "react-sizeme";

function NftGallery({ account, web3Handler, store, nft }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStoreItems();
  }, []);

  const buyStoreItem = async (item) => {
    const price = ethers.utils.parseEther(item.price)
    await (await store.purchaseItem(item.itemId, { value: price })).wait()
    loadStoreItems()
  }

  const loadStoreItems = async () => {
    // load all items
    const itemCount = await store.callStatic.itemCount();
    let items = [];

    for (let i = 1; i <= Number(itemCount.toString()); i++) {
      const item = await store.callStatic.items(i);
      // get uri url from nft contract
      const uri = await nft.tokenURI(item.tokenId);
      // use uri to fetch the nft metadata stored on ipfs
      const response = await axios.get(uri);
      const metadata = await response.data;
      // get item price
      const price = await store.getPrice(item.itemId);

      // Add item to items array

      items.push({
        price: ethers.utils.formatEther(price),
        itemId: item.itemId._hex,
        seller: item.seller,
        collection: item.collection,
        name: metadata.name,
        country: metadata.country,
        image: metadata.image,
      });
    }
    setLoading(false)
    setItems(items);
  };

  if (loading) return (
      <h2>Loading...</h2>
  )
  return (
    <>
      <Navigation account={account} web3Handler={web3Handler} />
      {/* <Carousel  className="m-3 p-4">
        <Carousel.Item  >
        <img className="d-block w-100" src="images/athens.png" alt="Third slide" />

          <Carousel.Caption>
            <h3> Athens 2022</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }} href="/nftbuyitem" alt="Buy item">
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item >
          <img className="d-block w-100" src="images/berlin.png" alt="Second slide" />

          <Carousel.Caption>
            <h3> Berlin 2022</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100" src="images/cairo.png" alt="Third slide" />

          <Carousel.Caption>
            <h3>Cairo 2022</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item >
          <img className="d-block w-100" src="images/lisbon.png" alt="Third slide" />

          <Carousel.Caption>
            <h3> Lisbon 2022</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button className= "fw-bold" style={{ background: "linear-gradient(#B2FBED, #9198e5)" }}>
              + Details
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <CardGroup className="m-4">
    <Container>
      <Row>
        <h2>GlobeART Collections</h2>
        {items.length > 0 ? (
          items.map((item, idx) => (
            <Card key={idx} className="m-4">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "400px" }}
              />
              <Card.Body
                style={{
                  background: "linear-gradient(#B2FBED, #9198e5)",
                  width: "400px",
                }}>
                <Card.Title>{item.collection}</Card.Title>
                <Card.Text>
                  <small bg="primary">Price: {item.price} ETH</small>
                </Card.Text>
                <Button onClick={() => buyStoreItem(item)}>Buy Now!</Button>
              </Card.Body>
            </Card>
          ))
          ) : (
            <div style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </div>
        )}

          </Row>
        </Container>
      </CardGroup>
      <Footer />
    </>
  );
}

export default NftGallery;

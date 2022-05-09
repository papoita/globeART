import { useEffect, useState } from "react";
import "../App.css";
import { Card, CardGroup } from "react-bootstrap";
import { ethers } from "ethers";
import axios from "axios";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function PersonalCollection({ store, nft, account }) {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPurchasedItems = async () => {
    // Fetch purchased items from store by quering Bought events with the buyer set as the user acct
    const filter = store.filters.Bought(null, null, null, null, null, account);
    const results = await store.queryFilter(filter);
    //Fetch metadata of each nft and add that to listedItem object.
    const purchases = await Promise.all(
      results.map(async (i) => {
        // fetch arguments from each result
        i = i.args;
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await axios.get(uri);
        const metadata = await response.data;

        let purchasedItem = {
          price: ethers.utils.formatEther(i.price),
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        };
        return purchasedItem;
      })
    );
    setLoading(false);
    setPurchases(purchases);
  };

  useEffect(() => {
    loadPurchasedItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <h2>Loading...</h2>;
  return (
    <>
      <Navigation />
      <CardGroup className="m-4">
        <h2>GlobeART Collections</h2>
        {purchases.length > 0 ? (
          purchases.map((item, idx) => (
            <Card key={idx} className="m-4">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "200px" }}
              />
              <Card.Body
                style={{
                  background: "linear-gradient(#B2FBED, #9198e5)",
                  width: "200px",
                }}>
                <Card.Title>{item.collection}</Card.Title>
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

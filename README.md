@[papoita](https://github.com/papoita) | version 1.0.1

# globeART project 

This project was completed by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/), [Yen Nguyen](https://www.linkedin.com/in/yen-hnguyen/) and Martha Staus as final project of LightHouse Labs Web Development Bootcamp. It provided an opportunity to demonstrate our abilities as software developers plus allowed for the experimentation of new technology. 

## globeART 
Is a web application that allows users to purchase NFT's when they are visiting a new city. A 3D globe allows users to visually identify locations for which there are available NFTs. By clicking the globe the user is taken to a gallery of all the NFTs. NFTs are created using [snowpixel AI](https://snowpixel.app/) and they can be purchased using [Metamask](https://metamask.io/). Users can store them in their personal collection gallery in the App.

## Features:

* A 3D interactive globe shows the location of NFTs.

* Users can visit the gallery to view all available NFTs, know their price and the location as well as the collection they belong to.

* Users have a personal gallery with their purchased NFTs.

* Users can log into their Metamask account to facilitate authorization and purchase.


## Techstack
  
 💡 This frontend project is built with React, React-Bootstrap, Bootstrap, Sass, React-icons library.

 💡 Color-gradients and color schema were chosen after a little market research into 
popular web3 sites and 
famous NFTs such as doodles

 💡 3D globe was imported using react-globe-gl to represent the NFT location in a spherical projections.
 
 💡 Each label is a marker for a 
collectible piece of art 
geolocated to several city coordinates around the world

 💡 Each art piece was curated based on the particular sensation it could bring to the user
 
 💡 NFTs were minted using smart contrats written in solidity and stored in IPFS pinhata cloud.
 
 💡 Hardhat was used as a development environment and ethers.js to connect to the Ethereum network.

 💡 Thinking about the user exoerience we connected metamask, a web3 wallet that will allows our users to seamlessly buy and see thier personal collection.


## Demo-video


https://user-images.githubusercontent.com/14196937/170806992-1ca132ab-beff-4169-81f1-d8fc5d0d092c.mp4




## Deployment

[globeART](https://globeart.netlify.app/) is deployed using netlify BUT smart contracts only exist in the development environment hardhat so unfortunately the minted NFTS and the buying option is not fully functioning in the real world.
In order for that to be available we need to deploy first to polygon.
Nevertheless, you can still visit and play with the interactive globe!

### Dependencies

* react
* react-bootstrap
* bootstrap
* sass
* react-globe-gl
* react-icons
* hardhat
* metamask
* ethers


# Project SetUp


## To start a local hardhat network:

```shell
npx hardhat node
```

## To deploy smart contract on a local network:

```shell
npx hardhat --network localhost run scripts/deploy.js
```

## Running globeART

```shell
cd frontend
npm install
npm run start:frontend
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


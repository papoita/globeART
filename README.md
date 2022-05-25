@[papoita](https://github.com/papoita) | version 1.0.0

# globeART project 

This project was completed by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/), [Yen Nguyen](https://www.linkedin.com/in/yen-hnguyen/) and Martha Staus as final project of LightHouse Labs Web Development Bootcamp. It provided an opportunity to demonstrate our abilities as software developers plus allowed for the experimentation of new technology. 

## globeART 
Is a web application that allows users to purchase NFT's when they are visiting a new city. A 3D globe allows users to visually identify locations for which there are available NFTs. By clicking the globe the user is taken to a gallery of all the NFTs. NFTs are created using snowpixel AI (link) and they can be purchased using Metamask (link). Users can store them in their personal collection gallery in the App.

## Features:

* A 3D clickable globe shows the location of NFTs.

* Users can visit the gallery to view all available NFTs, know their price and the location as well as the collection they belong to.

* Users have a personal gallery with their purchased NFTs.

* USer can log into their MEtamask account to facilitate authorization and purchase.


## Techstack
  
 💡 This frontend project is built with React, React-Bootstrap, Bootstrap, Sass, React-icons library.

 💡 3D globe was imported using react-globe-gl to represent the NFT location in a spherical projection.
 
 💡 NFTs are minted using IPFS and the transaction in bitcoin.
 
 💡 Hardhat was used for the contract creation and deplyment

## Screenshots

## Gif


### Dependencies

* react
* react-bootstrap
* bootstrap
* sass
* react-icons



## Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
# globeART Project SetUp


## To start a local network:

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
npm run start:frondend
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


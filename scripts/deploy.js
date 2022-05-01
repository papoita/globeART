async function main() {

  const GlobeArtNFT = await ethers.getContractFactory("GlobeArtNFT");
  const globeArtNFT = await GlobeArtNFT.deploy();

  await globeArtNFT.deployed();

  console.log("GlobeArtNFT deployed to:", globeArtNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
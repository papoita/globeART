async function mint(URI) {
  
  const contract = await ethers.getContractAt("GlobeArtNFT", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

  const newNFT = await contract.createGlobeArtNFT(URI);

}
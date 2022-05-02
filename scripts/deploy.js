async function main() {

  const GlobeArtNFT = await ethers.getContractFactory("GlobeArtNFT");
  const globeArtNFT = await GlobeArtNFT.deploy();

  await globeArtNFT.deployed();

  console.log("GlobeArtNFT deployed to:", globeArtNFT.address);

   // Save copies of each contracts abi and address to the frontend.
   saveFrontendFiles(globeArtNFT, "GlobeArtNFT");
 }
 
 function saveFrontendFiles(contract, name) {
   const fs = require("fs");
   const contractsDir = __dirname + "/../frontend/contractsData";
 
   if (!fs.existsSync(contractsDir)) {
     fs.mkdirSync(contractsDir);
   }
 
   fs.writeFileSync(
     contractsDir + `/${name}-address.json`,
     JSON.stringify({ address: contract.address }, undefined, 2)
   );
 
   const contractArtifact = artifacts.readArtifactSync(name);
 
   fs.writeFileSync(
     contractsDir + `/${name}.json`,
     JSON.stringify(contractArtifact, null, 2)
   );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
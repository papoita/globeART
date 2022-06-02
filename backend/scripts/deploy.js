async function main() {

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  const Shop = await ethers.getContractFactory("Shop");
  const shop = await Shop.deploy();

  await token.deployed();

  console.log("Token deployed to:", token.address);
  console.log("Shop deployed to:", shop.address);

   // Save copies of each contracts abi and address to the frontend.
   saveFrontendFiles(token, "Token");
   saveFrontendFiles(shop, "Shop");
 }
 
 function saveFrontendFiles(contract, name) {
   const fs = require("fs");
   const contractsDir = __dirname + "/../../frontend/src/contractsData";
 
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
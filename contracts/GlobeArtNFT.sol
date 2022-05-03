// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact <emergency contact email here>
contract GlobeArtNFT is ERC721URIStorage, Ownable {
 
    mapping(uint256=> string) public nftsCollections;
    uint public tokenCount;
   
    constructor() ERC721("globeArtNFT", "GANFT") {}

    function createGlobeArtNFT(string memory tokenURI, string memory collectionName) external onlyOwner returns(uint) {
        tokenCount ++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, tokenURI);
        nftsCollections[tokenCount]=collectionName;
        return(tokenCount);
    }
}
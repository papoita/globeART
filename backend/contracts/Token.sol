// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract Token is ERC1155, Ownable, ERC1155Burnable {

    string public name;
    string public symbol;

    constructor() ERC1155("") {
        name = "Trotter";
        symbol = "TRTR";
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address to, uint256 id, uint256 amount)
        public
        onlyOwner
    {
        _mint(to, id, amount, "");
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, "");
    }
    function uri(uint256 tokenId) override public pure returns (string memory) {
        return(
            string(abi.encodePacked("https://ipfs.io/ipfs/QmRX9Vrjcg2LgFqNTzsy1CcydrpWKZrbregnpEd3DNiWpM/",
            Strings.toString(tokenId),
            ".json"))
        );
    }
}
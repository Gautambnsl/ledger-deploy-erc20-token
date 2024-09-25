// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    // Constructor to set the initial supply and assign ownership
    constructor(uint256 initialSupply) 
        ERC20("MyToken", "MTK") 
        Ownable(msg.sender) // No arguments needed here since Ownable's constructor will use msg.sender
    {
        _mint(msg.sender, initialSupply); // Mint the initial supply to the deployer's address
    }
}

const hre = require("hardhat");
const { ethers } = require("ethers");
const { LedgerSigner } = require('@ethersproject/hardware-wallets');

async function main() {
    const initialSupply = ethers.utils.parseUnits("1000000", 18); // 1 million tokens with 18 decimals

    // Connect to the Ledger
    const provider = new ethers.providers.JsonRpcProvider("https://1rpc.io/oasis/sapphire");
    
    // Create the LedgerSigner with the correct derivation path
    const ledgerSigner = new LedgerSigner(provider,"hid", "m/44'/60'/0'/0'"); // Note the extra quote at the end
    const signerAddress = await ledgerSigner.getAddress();

    console.log("Using Ledger account:", signerAddress);

    // Get the contract factory for MyToken
    const Token = await hre.ethers.getContractFactory("MyToken", ledgerSigner);
    const token = await Token.deploy(initialSupply);

    await token.deployed();

    console.log("Token deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

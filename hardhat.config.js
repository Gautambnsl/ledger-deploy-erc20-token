require("@nomicfoundation/hardhat-ledger");

module.exports = {
    solidity: {
        version: "0.8.20", // Specify the exact version required
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
    hardhat: {
    //   ledgerAccounts: [
    //   ],
      //ledgerAccounts: [...],
    //   ledgerOptions: {
        derivationFunction: (x) => `m/44'/60'/0'/${x}` // legacy derivation path
    //   }
    },
  },
};
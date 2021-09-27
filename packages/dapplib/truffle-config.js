require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn provide gesture neck flock tilt'; 
let testAccounts = [
"0x579cd584fe500dd463a7f625623b280be4741e8ef5b5a723b558cf6e8f13a3be",
"0xa8d67466b21dddc611fb134a736b4434584e2339802785f734e09d4c5934f486",
"0x89f7e116482767009e3c174b7686e8f9ebabf4487cdc6665c261aa15ef855979",
"0x5ec24a57cb3b49a0440313e64025482dc7ec7721b2252bb9dd5a1babd9a86bae",
"0x5dd2f74bbe479ff6042986753b43feaac119c692c84ceb44c4e52e758e8afe39",
"0x0f148709b5d84ce7a9fc3dd93bd1e278788b25b6e3ac966f02223e8bccc79c3e",
"0x8bb57980f1f4d1374bcb721c83641883777a44a141158921a68ac67608cb6ce0",
"0xc577b021db907b0f5ec0a6ee4807b4e2a8c4f4a8a71ebd1e9f1dd3f0e76a4c9b",
"0xc99bf3ec5f3eaa5be2faa3fc1a91a24d80d1d69cb1b6e85e25349766055470da",
"0x51b23c7d7456f640dedad8bfded16a3d5e25a850d688599343dc4161fc63aca9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


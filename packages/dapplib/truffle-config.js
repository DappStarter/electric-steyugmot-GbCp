require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind hub grace slight flush sustain'; 
let testAccounts = [
"0xfbeea56cf03bcf01a6190eef1b81e34994e6dbac8b039e5845cd0670c62d6b18",
"0x38dc5c9f701119a02b7bb42d14cd09e93f7e68fd574363a427c364d55b99bc5d",
"0x20301e07f39bbabd4778fcc79579ed13ae7378f852be497fa5744a25067591e6",
"0x7cdfd26d26f8ac2d7e6e9d3166f89765f0cdf1897f4766d7042be19d1bcb08af",
"0x86b48408e4b8149e643a783a3bb860e0b2915af58ddd724a24d72760c739f11c",
"0xd77c967b9737992cb51592a60b54f02ea42be12ec2b0dd1b9ad87781d307b30f",
"0xee0ba4cdc5100a9dd463ac78e24120b6d3ed06bcbd4d43543d9018d95b9a9999",
"0xde9abe668c14d1db1715098ea6997e25d08293546bc07c07879e9c254b478e6c",
"0x06cae0524fd35538714b8dbae69d98dc6e03d986452fb765e11eabda8c9e33d5",
"0x6cc1a6d5e89396f6dbeb910c8ee8c73cb8224f8c29e8b519d7652bdeebe6e0d5"
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


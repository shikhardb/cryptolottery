import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running Metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/bc13752f4b8d4d38a16e8938390fbf5b'
  );
  web3 = new Web3(provider);
}

export default web3;

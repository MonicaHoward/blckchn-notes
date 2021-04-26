import React from 'react';
import Web3 from 'web3';
import './App.css';

function App() {
  
  window.ethereum.request({method: "eth_requestAccounts"});
  const web3 = new Web3(window.ethereum);
  const version = web3.version;
  console.log(web3.version);

  return (
    <div className="App">
      <h1>Blockchain Notes App</h1>
      <h2>Powered by {version}</h2>
    </div>
  );
}

export default App;

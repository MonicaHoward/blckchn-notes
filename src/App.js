import React, { useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

function App() {

  useEffect(() => {loadBlockChainData()} )

  const loadBlockChainData = async () => {
     const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    const network = await web3.eth.net.getNetworkType();
    console.log("network:", network);

  }

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;

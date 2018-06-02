window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {

    // Use the browser's ethereum provider
    var provider = web3.currentProvider;
    var defaultAccount = web3.eth.defaultAccount;
    document.getElementById("defaultAccount").innerHTML = defaultAccount;

  } else {
    document.getElementById("defaultAccount").innerHTML = 'No web3? You should consider trying MetaMask!';
  }

})

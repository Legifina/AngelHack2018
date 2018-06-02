window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {

    // Use the browser's ethereum provider
    var provider = web3.currentProvider;
    document.getElementById("output").innerHTML = provider;

  } else {
    document.getElementById("output").innerHTML = 'No web3? You should consider trying MetaMask!';
    console.log('No web3? You should consider trying MetaMask!')
  }

})

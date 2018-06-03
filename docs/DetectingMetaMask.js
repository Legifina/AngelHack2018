var isMetaMask;
var account
if (typeof web3 !== 'undefined') {
  var Web3 = require('web3');
  var localWeb3 = new Web3(web3.currentProvider);
  localWeb3.eth.getAccounts(function(error, result){
    if(!error) {
      isMetaMask = true;
      account = result[0];
      document.getElementById("Account").innerHTML += account;
    }
    else {
      isMetaMask = false;
      document.getElementById("Account").innerHTML += error;
    }
  })
} else {
  isMetaMask = false;
  document.getElementById("Account").innerHTML = "No web3? You should consider trying MetaMask!";
}
console.log(account);

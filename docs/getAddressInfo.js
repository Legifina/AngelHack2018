var data = "{}";
var apiServer = "http://api.ethplorer.io/";
var apiKey = "apiKey=freekey";
var apiMethod = "getAddressInfo";
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

console.log(account);
if(isMetaMask) {
  document.getElementById("Account").innerHTML += Account;
}

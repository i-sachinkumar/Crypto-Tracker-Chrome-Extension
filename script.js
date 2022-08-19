var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var usdt = document.getElementById("tether");
var ada= document.getElementById("cardano");
var sol= document.getElementById("solana");
var dot= document.getElementById("polkadot");
var doge = document.getElementById("doge");

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cpolkadot%2Ctether%2Ccardano%2Csolana%2Cethereum%2Cdogecoin&vs_currencies=usd")
.then(response => response.json())
.then(response => {
    console.log(response)
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    usdt.innerHTML = response.tether.usd;
    ada.innerHTML = response.cardano.usd;
    sol.innerHTML = response.solana.usd;
    dot.innerHTML = response.polkadot.usd;
    doge.innerHTML = response.dogecoin.usd;
})

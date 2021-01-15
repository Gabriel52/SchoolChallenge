const contract = require('truffle-contract');
const metacoin_artifact = require('../build/contracts/MetaCoin.json');
var MetaCoin = contract(metacoin_artifact);

module.exports = {
  start: function(callback) {
    try {
      var self = this;

      // Bootstrap the MetaCoin abstraction for Use.
      MetaCoin.setProvider(self.web3.currentProvider);

      // Get the initial account balance so it can be displayed.
      self.web3.eth.getAccounts(function(err, accs) {
        if (err != null) {
          console.log("There was an error fetching your accounts.");
          return;
        }

        if (accs.length == 0) {
          console.log("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
          return;
        }
        self.accounts = accs;
        self.account = self.accounts[2];

        callback(self.accounts);
      });
    } catch(e) {
      console.log("Error consult accounts: " + e);
    } 
  },
  balance: function(addressWallet, callback) {
    try {
      var self = this;

      // Bootstrap the MetaCoin abstraction for Use.
      MetaCoin.setProvider(self.web3.currentProvider);

      //Saldo da carteira em Wei
      const wei = self.web3.eth.getBalance(addressWallet).toNumber();
      //Wei convertido para ethereum
      const balance = self.web3.fromWei(wei, 'ether');
      //console.log({amout: Math.round(balance) + " RSC/ETH"});

      callback(Math.round(balance));
    } catch(e) {
      console.log(e)
      callback(e);
    }
  },
  transaction: function(amount, send, receive, callback) {
    try {
      var self = this;

      // Bootstrap the MetaCoin abstraction for Use.
      MetaCoin.setProvider(self.web3.currentProvider);
      
      var resultado = self.web3.eth.sendTransaction({
        from: send,
        to: receive,
        value: amount
      })

      callback(resultado);
    } catch(e) {
      console.log(e);
      callback(e);
    } 
  },
  getTransaction: function(hash, callback) {
    try {
      var self = this;

      // Bootstrap the MetaCoin abstraction for Use.
      MetaCoin.setProvider(self.web3.currentProvider);

      var transactionInfo = self.web3.eth.getTransaction(hash);
  
      callback(transactionInfo);
    } catch(e) {
      console.log(e);
      callback(e);
    }
  }
}

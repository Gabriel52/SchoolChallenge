const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');
const { response } = require('express');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', express.static('public_static'));

//Create Address User
app.get('/getAccounts', (req, res) => {
  truffle_connect.start(function (answer) {
    res.send(answer);
  })
});


//Get Balance Address
app.post('/balanceAddress', function (req, res) {
  let addressWallet = req.body.address
  
  truffle_connect.balance(addressWallet, (balance) => {
    res.json({resultado: balance});
  })
});

//Transação
app.post('/sendTransaction', function(req, res) {
  let sendAddress = req.body.send
  let receiveAddress = req.body.receive
  let amount = req.body.amount

  //res.send({send: sendAddress, receive: receiveAddress, amount: amount});
  truffle_connect.transaction(amount, sendAddress, receiveAddress, (resultado) => {
    res.json({resultado: resultado});
  });
})

//Get Transaction Info
app.post('/getTransaction', function(req, res) {
  var hash = req.body.hash

  truffle_connect.getTransaction(hash, (transaction) => {
    res.send(transaction);
  })
})


app.listen(port, () => {

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));

  console.log("Express Listening at http://localhost:" + port);

});

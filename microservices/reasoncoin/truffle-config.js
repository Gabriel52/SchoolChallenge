// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '192.168.0.48',
      port: 8545,
      network_id: '666'
    }
  }
}

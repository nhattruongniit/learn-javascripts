
const fetch = require('cross-fetch');

class Client {
  get(url, method) {
    return fetch(url, { method });
  }
}

const client = new Client();
module.exports = {
  client
} ;
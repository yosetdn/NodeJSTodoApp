const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
  id:10
};

var token = jwt.sign(data,'xd');
console.log(token);
console.log(jwt.verify(token,'xd'));
// let message = 'I am user number 10';
//
// let hash = SHA256(message).toString();
//
// console.log(hash);
//
// var data = {
//   id: 4
// }
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)).toString()
// }

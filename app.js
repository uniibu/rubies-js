'use strict';
var rubies = module.exports;

rubies.Address = require('./lib/address');
rubies.PrivateKey = require('./lib/privatekey');
rubies.PublicKey = require('./lib/publickey');
rubies.crypto = {};
rubies.crypto.BN = require('./lib/crypto/bn');

rubies.crypto.Hash = require('./lib/crypto/hash');
rubies.crypto.Random = require('./lib/crypto/random');
rubies.crypto.Point = require('./lib/crypto/point');

var value = new Buffer('correct horse battery staple');
var hash = rubies.crypto.Hash.sha256(value);
var bn = rubies.crypto.BN.fromBuffer(hash);

var address = new rubies.PrivateKey(bn,'testnet').toAddress();

console.log(address);
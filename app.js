'use strict';
var rubies = module.exports;
rubies.Random = require('./lib/crypto/random');
rubies.Address = require('./lib/address');
rubies.PrivateKey = require('./lib/privatekey');
rubies.PublicKey = require('./lib/publickey');
rubies.crypto = {};
rubies.crypto.BN = require('./lib/crypto/bn');
rubies.HdPrivateKey = require('./lib/hdprivatekey');
rubies.HdPublicKey = require('./lib/hdpublickey');
rubies.crypto.Hash = require('./lib/crypto/hash');
rubies.crypto.Random = require('./lib/crypto/random');
rubies.crypto.Point = require('./lib/crypto/point');
var HDPrivateKey = rubies.HdPrivateKey;
var Random = rubies.Random;
var hdPrivateKey = new HDPrivateKey('livenet',false);

console.log(hdPrivateKey.derive(1));
console.log(hdPrivateKey.hdPublicKey);
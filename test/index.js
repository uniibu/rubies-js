var rubies = require('../');
var HDPrivateKey = rubies.HdPrivateKey;
var Random = rubies.Random;
var hdPrivateKey = new HDPrivateKey('livenet',false);

// generate bip32 master keys
console.log(hdPrivateKey.derive(1));
console.log(hdPrivateKey.hdPublicKey);
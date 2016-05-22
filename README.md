# rubies-js
Rubies coin javascript library for generating address http://rbies.org

This is under development.

Since Rubies does not have an official bip32 version byte, i use the value below until there is an official one.
   xpubkey: 0x02042a34,
   xprivkey: 0x020425f9

### Example
```
var rubies = require('../');
var HDPrivateKey = rubies.HdPrivateKey;
var Random = rubies.Random;
var hdPrivateKey = new HDPrivateKey('livenet',false);

// generate bip32 master keys
console.log(hdPrivateKey.derive(1));
console.log(hdPrivateKey.hdPublicKey);

//will output
<HDPrivateKey: Rprv89gcBGMxhHiEhDbUNsRz9Xm52iJmnZsjFJo2ueujbjZ6SqkteiYxXtxcm3EH9qN4tsH2b2jeFpRbzsFDmTcKa2KdAuMZ49izKL2C5cSrLFZ>
<HDPublicKey: RpubCdcZ1W9TpJ2UEjHykH5EFkuFDCMnDk9ZKenpZL5BQAHYV6DZUjS4rHUwnuyzx7RXxDpXo56RUo3rHMbrfM2dXx6mV3uFtyAE3rx8LHSMQC2>

```

### Some of the modules in here are forked from bitcoinjs and bitcore
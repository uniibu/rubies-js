'use strict';
var _ = require('lodash');

var BufferUtil = require('./util/buffer');
var JSUtil = require('./util/js');
var networks = [];
var networkMaps = {};

/**
 * A network is merely a map containing values that correspond to version
 * numbers for each bitcoin network. Currently only supporting "livenet"
 * (a.k.a. "mainnet") and "testnet".
 * @constructor
 */
function Network() {}

Network.prototype.toString = function toString() {
    return this.name;
};

/**
 * @function
 * @member Networks#get
 * Retrieves the network associated with a magic number or string.
 * @param {string|number|Network} arg
 * @param {string|Array} keys - if set, only check if the magic number associated with this name matches
 * @return Network
 */
function get(arg, keys) {
    if (~networks.indexOf(arg)) {
        return arg;
    }
    if (keys) {
        if (!_.isArray(keys)) {
            keys = [keys];
        }
        var containsArg = function(key) {
            return networks[index][key] === arg;
        };
        for (var index in networks) {
            if (_.any(keys, containsArg)) {
                return networks[index];
            }
        }
        return undefined;
    }
    return networkMaps[arg];
}

/**
 * @function
 * @member Networks#add
 * Will add a custom Network
 * @param {Object} data
 * @param {string} data.name - The name of the network
 * @param {string} data.alias - The aliased name of the network
 * @param {Number} data.pubkeyhash - The publickey hash prefix
 * @param {Number} data.privatekey - The privatekey prefix
 * @param {Number} data.scripthash - The scripthash prefix
 * @param {Number} data.xpubkey - The extended public key magic
 * @param {Number} data.xprivkey - The extended private key magic
 * @param {Number} data.networkMagic - The network magic number
 * @param {Number} data.port - The network port
 * @param {Array}  data.dnsSeeds - An array of dns seeds
 * @return Network
 */
function addNetwork(data) {

    var network = new Network();

    JSUtil.defineImmutable(network, {
        name: data.name,
        alias: data.alias,
        pubkeyhash: data.pubkeyhash,
        privatekey: data.privatekey,
        scripthash: data.scripthash,
        xpubkey: data.xpubkey,
        xprivkey: data.xprivkey
    });

    if (data.networkMagic) {
        JSUtil.defineImmutable(network, {
            networkMagic: BufferUtil.integerAsBuffer(data.networkMagic)
        });
    }

    if (data.port) {
        JSUtil.defineImmutable(network, {
            port: data.port
        });
    }

    if (data.dnsSeeds) {
        JSUtil.defineImmutable(network, {
            dnsSeeds: data.dnsSeeds
        });
    }
    _.each(network, function(value) {
        if (!_.isUndefined(value) && !_.isObject(value)) {
            networkMaps[value] = network;
        }
    });

    networks.push(network);

    return network;

}


addNetwork({
    name: 'livenet',
    alias: 'mainnet',
    pubkeyhash: 0x3c,
    privatekey: 0xbc,
    scripthash: 0x1D,
    xpubkey: 0,
    xprivkey: 0,
    networkMagic: 0x77334215,
    port: 8333,
    dnsSeeds: [

    ]
});






/**
 * @namespace Networks
 */
module.exports = {
    add: addNetwork,
    livenet: livenet,
    get: get
};
/**
 * Created by Uni on 5/21/2016.
 */

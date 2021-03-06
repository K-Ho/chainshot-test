import Client from '../Client.js'
import EthCrypto from 'eth-crypto'
const assert = require('assert')

describe('Verify Signatures', function () {
    let Alice,
        Bob,
        Kevin,
        message,
        signature
    beforeEach(() => {
        message = Math.random()
        Alice = new Client()
        Bob = new Client()
        Kevin = new Client()
        signature = Alice.sign(message)
    });

    it('should be considered valid', function () {
        assert(Kevin.verify(
            signature, 
            EthCrypto.hash.keccak256(message), 
            Alice.wallet.address
        ))
    });
    it('should be considered invalid', function () {
        assert(!Kevin.verify(
            signature,
            EthCrypto.hash.keccak256(message),
            Bob.wallet.address
        ))
    });
});
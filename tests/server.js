
/** A file for testing the server response.*/

/** See also https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai */

process.env.NODE_ENV = 'test';

var chai = require("chai");
var expect = chai.expect;

var chaiHTTP = require("chai-http");
chai.use(chaiHTTP);

var server = require("../server");


var wrongPath = "/-X-XA";

describe(wrongPath, () => {
    it("Should get null data from server", (done) => {
        chai.request(server).get(wrongPath)
        .end((err, res) => {
            expect(res.unixtime).to.equal(null);
            expect(res.natural).to.equal(null);
            done();
            
        })
    }
    )
    
}
);

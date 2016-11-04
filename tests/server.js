
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
            expect(err).to.be.null;
            expect(res).to.be.json;
            //console.log(JSON.stringify(res));
            var json = JSON.parse(res.text);
            expect(json.unix).to.equal(null);
            expect(json.natural).to.equal(null);
            done();
        });
    });
});


describe("/1234 unixtime", () => {
    it("Should get unixtime and date from server", (done) => {
        chai.request(server).get("/1234")
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.json;
            
            var json = JSON.parse(res.text);
            expect(json.unix).to.equal(1234);
            expect(json.natural).to.match(/1970/);
            done();
        });
    });
});


describe("/ GET", () => {
    it("Should get the index.html from server", (done) => {
        chai.request(server).get('/')
        .end((err, res) => {
            expect(err).to.be.null;
            //console.log(JSON.stringify(res));
            //expect(res.unixtime).to.equal(null);
            //expect(res.natural).to.equal(null);
            expect(res).to.be.html;
            done();
            
        });
    });
});
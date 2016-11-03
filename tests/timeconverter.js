

var chai = require("chai");
var expect = chai.expect;

var Conv = require("../timeconverter.js");

describe("TimeConverter", function() {
    
    it("Converts unixtime to unixtime", function() {
        var conv = new Conv();
        
        var result = conv.convert("1234");
        
        expect(result.unix).to.equal(1234);
        
        result = conv.convert("0");
        
        expect(result.unix).to.equal(0);
        
    });
    
    it("Converts natural time to unixtime", function() {
        var conv = new Conv();
        var input = "Dec  6, 2011";
        var result = conv.convert(input);
        
        expect(result.unix !== null).to.equal(true);
        
        var unixtime = Date.parse(input);
        expect(result.unix).to.equal(unixtime);
        
        input = "January 8, 1980";
        unixtime = Date.parse(input);
        expect(result.unix).to.equal(unixtime);
        
    });

});
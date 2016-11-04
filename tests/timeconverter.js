

var chai = require("chai");
var expect = chai.expect;


var Conv = require("../timeconverter.js");

describe("TimeConverter", function() {
    
    it("Converts unixtime to unixtime", function() {
        var conv = new Conv();
        
        var result = conv.convert("1234");
        expect(result.unix).to.equal(1234);
        
        result = conv.convert("1");
        expect(result.unix).to.equal(1);
        
    });
    
    it("Converts unixtime to natural time", function() {
        var conv = new Conv();
        var result = conv.convert("0");
        expect(result.natural).to.match(/1970/);
        
        result = conv.convert("1000");
        expect(result.natural).to.match(/1970/);
        expect(result.natural).to.match(/January/);
        
        var unix = "1449619200000";
        result = conv.convert(unix);
        expect(result.natural).to.match(/December/);
        expect(result.natural).to.match(/2015/);
        
    });
    
    it("Converts natural time to unixtime", function() {
        var conv = new Conv();
        var input = "Dec  6, 2011";
        var result = conv.convert(input);
        
        expect(result.unix !== null).to.equal(true);
        
        var unixtime = Date.parse(input);
        expect(result.unix).to.equal(unixtime);
        
        input = "Jan 8, 1980";
        unixtime = Date.parse(input);
        result = conv.convert(input);
        expect(result.unix).to.equal(unixtime);
        
    });

    it("Converts natural time to natural time", function() {
        var conv = new Conv();
        var input = "Dec  6, 2011";
        var result = conv.convert(input);
        
        expect(result.natural).to.match(/December/);
        expect(result.natural).to.match(/6/);
        expect(result.natural).to.match(/2011/);
        
    });
    
    it("Returns null props on wrong input", function() {
        var conv = new Conv();
        var input = "-Dec  6, 2011";
        var result = conv.convert(input);
        
        expect(result.natural).to.equal(null);
        expect(result.unix).to.equal(null);
        
    });

});
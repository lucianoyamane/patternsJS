var chai = require('chai'); 
var expect = chai.expect;

const { namesCollection } = require('../../src/app/module.pattern'); 

describe("index test", function(){

    it('test size', function() {

        namesCollection.addName("Bob");
        namesCollection.addName("Alice");
        namesCollection.addName("Franck");

        expect(namesCollection.getNames()).to.have.lengthOf(3);
          
    })

})
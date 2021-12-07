var chai = require('chai'); 
var expect = chai.expect;

const { manager } = require('../../src/app/command.pattern'); 

describe("index test", function(){

    it('test size', function() {

        
        console.log(manager.execute("add", 3, 5));

        console.log(manager.execute("subtract", 5, 3));
          
    })

})
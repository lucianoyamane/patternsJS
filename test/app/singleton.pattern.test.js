var chai = require('chai'); 
var expect = chai.expect;

const { singleton } = require('../../src/app/singleton.pattern'); 

describe("index test", function(){

    it('test size', function() {

        var configObject = singleton.getConfig({ "size": 8 });
        console.log(configObject);
        var configObject1 = singleton.getConfig({ "number": 8 });
        console.log(configObject1);
          
    })

})
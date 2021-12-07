var chai = require('chai'); 
var expect = chai.expect;

const { Person } = require('../../src/app/prototype.pattern'); 

describe("index test", function(){

    it('test size', function() {

        var person1 = Person();
        var person2 = Person("Bob", 38);
        
        
        console.log(person1.sayHi());
 
        console.log(person2.sayHi());
          
    })

})
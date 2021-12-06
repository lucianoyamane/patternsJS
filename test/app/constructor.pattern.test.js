var chai = require('chai'); 
var expect = chai.expect;

const { Person } = require('../../src/app/constructor.pattern'); 

describe("index test", function(){

    it('test hasCar true', function() {

        let personTest = new Person('Test', 18, true);

        expect('He has a car').to.eql(personTest.exampleFunction())
          
    })

    it('test hasCar false', function() {

        let personTest = new Person('Test', 18);

        expect('He does not have a car').to.eql(personTest.exampleFunction())
          
    })

})